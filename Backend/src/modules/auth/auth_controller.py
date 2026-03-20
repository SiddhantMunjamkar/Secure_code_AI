from fastapi import APIRouter, Depends, HTTPException, Response, Request
from fastapi.responses import RedirectResponse
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

import uuid

from src.database.connection import get_db
from src.database.models import User, Account
from src.modules.auth.auth_schemas import (
    SignupRequest,
    LoginRequest,
    SignupResponse,
    LoginResponse,
    UserResponse,
)
from src.modules.auth.auth_utils import create_token, hash_password, verify_password
from src.middleware.requireAuth import require_auth
from src.config.setting import settings
from src.config.cookie import AUTH_COOKIE_NAME, AUTH_COOKIE_OPTIONS
from src.modules.auth.oauth_provider import oauth


router = APIRouter(prefix="/api/auth", tags=["auth"])


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
    current_user: dict = Depends(require_auth),
):
    """Get current authenticated user"""
    return UserResponse(**current_user)


@router.post("/logout")
async def logout(response: Response):
    """Logout user"""
    response.delete_cookie(AUTH_COOKIE_NAME)
    return {"message": "Logged out successfully"}


@router.get("/oauth/github")
async def github_auth(request: Request):
    """Redirect to GitHub login"""
    redirect_uri = request.url_for("github_callback")
    return await oauth.github.authorize_redirect(request, redirect_uri)


@router.get("/oauth/github/callback", name="github_callback")
async def github_callback(request: Request, db: AsyncSession = Depends(get_db), response: Response = None):
    """Handle GitHub OAuth callback"""
    try:
        # Get token from GitHub
        token = await oauth.github.authorize_access_token(request)

        # Get user info from GitHub
        user_data = token.get("userinfo")
        if not user_data:
            user_resp = await oauth.github.get("user", token=token)
            user_data = user_resp.json()

        if not user_data:
            raise HTTPException(status_code=400, detail="Failed to get user info from GitHub")

        github_id = str(user_data.get("id"))
        github_username = user_data.get("login")
        email = user_data.get("email")
        avatar_url = user_data.get("avatar_url")
        name = user_data.get("name")

        if not email:
            emails_resp = await oauth.github.get("user/emails", token=token)
            if emails_resp.status_code == 200:
                emails = emails_resp.json()
                primary_verified = next(
                    (
                        e.get("email")
                        for e in emails
                        if e.get("primary") is True and e.get("verified") is True
                    ),
                    None,
                )
                if primary_verified:
                    email = primary_verified

        if not email:
            raise HTTPException(status_code=400, detail="GitHub account has no usable email")

        # Check if user exists
        stmt = select(User).where(User.email == email)
        result = await db.execute(stmt)
        user = result.scalars().first()

        # Create user if doesn't exist
        if not user:
            user = User(
                id=uuid.uuid4(),
                email=email,
                name=name,
                avatar_url=avatar_url,
                is_active=True,
            )
            db.add(user)
            await db.commit()
            await db.refresh(user)

        # Upsert account link for GitHub provider
        account_stmt = select(Account).where(
            Account.provider == "github",
            Account.provider_id == github_id,
        )
        account_result = await db.execute(account_stmt)
        account = account_result.scalars().first()

        if not account:
            account = Account(
                id=uuid.uuid4(),
                user_id=user.id,
                provider="github",
                provider_id=github_id,
                access_token=token.get("access_token"),
            )
            db.add(account)
            await db.commit()
        elif account.user_id != user.id or account.access_token != token.get("access_token"):
            account.user_id = user.id
            account.access_token = token.get("access_token")
            await db.commit()

        # Create JWT token
        jwt_token = create_token(str(user.id))

        # Redirect to frontend dashboard with auth cookie
        res = RedirectResponse(url=f"{settings.FRONTEND_URL}/dashboard", status_code=302)
        res.set_cookie(
            key=AUTH_COOKIE_NAME,
            value=jwt_token,
            **AUTH_COOKIE_OPTIONS,
        )
        return res

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
