from fastapi import APIRouter, Depends, HTTPException, Response, Cookie
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from passlib.context import CryptContext
import uuid

from src.database.connection import get_db
from src.database.models import User
from src.modules.auth.auth_schemas import (
    SignupRequest,
    LoginRequest,
    SignupResponse,
    LoginResponse,
    UserResponse,
)
from src.modules.auth.auth_utils import create_token, verify_token
from src.config.cookie import AUTH_COOKIE_NAME, AUTH_COOKIE_OPTIONS

# Password hashing context with bcrypt
pwd_context = CryptContext(
    schemes=["bcrypt_sha256"],
    deprecated="auto",
    bcrypt_sha256__rounds=12  # production-grade cost factor
)

router = APIRouter(prefix="/api/auth", tags=["auth"])


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


@router.post("/signup", response_model=SignupResponse, status_code=201)
async def signup(
    body: SignupRequest,
    response: Response,
    db: AsyncSession = Depends(get_db),
):
    """User signup with email and password"""
    try:
        # Check if user already exists
        stmt = select(User).where(User.email == body.email)
        result = await db.execute(stmt)
        existing_user = result.scalars().first()

        if existing_user:
            raise HTTPException(status_code=400, detail="User already exists")

        # Create new user
        new_user = User(
            id=str(uuid.uuid4()),
            email=body.email,
            password_hash=hash_password(body.password),
            name=body.name,
            is_active=True,
        )

        db.add(new_user)
        await db.commit()
        await db.refresh(new_user)

        # Create JWT token
        token = create_token(str(new_user.id))

        # Set cookie
        response.set_cookie(
            key=AUTH_COOKIE_NAME,
            value=token,
            **AUTH_COOKIE_OPTIONS,
        )

        return SignupResponse(
            id=new_user.id,
            email=new_user.email,
            name=new_user.name,
            avatar_url=new_user.avatar_url,
            created_at=new_user.created_at,
        )

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/signin", response_model=LoginResponse)
async def login(
    body: LoginRequest,
    response: Response,
    db: AsyncSession = Depends(get_db),
):
    """User login with email and password"""
    try:
        # Get user by email
        stmt = select(User).where(User.email == body.email)
        result = await db.execute(stmt)
        user = result.scalars().first()

        if not user:
            raise HTTPException(
                status_code=401, detail="Invalid email or password")

        # Verify password
        if not verify_password(body.password, user.password_hash):
            raise HTTPException(
                status_code=401, detail="Invalid email or password")

        # Create JWT token
        token = create_token(str(user.id))

        # Set cookie
        response.set_cookie(
            key=AUTH_COOKIE_NAME,
            value=token,
            **AUTH_COOKIE_OPTIONS,
        )

        return LoginResponse(
            id=user.id,
            email=user.email,
            name=user.name,
            avatar_url=user.avatar_url,
            created_at=user.created_at,
        )

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/me", response_model=UserResponse)
async def me(
    access_token: str | None = Cookie(None),
    db: AsyncSession = Depends(get_db),
):
    """Get current user"""
    try:
        if not access_token:
            raise HTTPException(status_code=401, detail="Not authenticated")

        # Verify token and get user_id
        payload = verify_token(access_token)
        user_id = payload.get("sub")

        if not user_id:
            raise HTTPException(status_code=401, detail="Invalid token")

        # Get user
        stmt = select(User).where(User.id == user_id)
        result = await db.execute(stmt)
        user = result.scalars().first()

        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        return UserResponse(
            id=user.id,
            email=user.email,
            name=user.name,
            avatar_url=user.avatar_url,
            is_active=user.is_active,
            last_login=user.last_login,
            created_at=user.created_at,
            updated_at=user.updated_at,
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/logout")
async def logout(response: Response):
    """Logout user"""
    response.delete_cookie(AUTH_COOKIE_NAME)
    return {"message": "Logged out successfully"}
