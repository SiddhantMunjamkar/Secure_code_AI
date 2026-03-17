from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
import uuid


# ─── Signup ─────────────────────────────

class SignupRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8)
    name: Optional[str] = None


class SignupResponse(BaseModel):
    id: uuid.UUID
    email: str
    name: Optional[str]
    avatar_url: Optional[str]
    created_at: datetime

    model_config = {"from_attributes": True}


# ─── Login ──────────────────────────────

class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class LoginResponse(BaseModel):
    id: uuid.UUID
    email: str
    name: Optional[str]
    avatar_url: Optional[str]

    model_config = {"from_attributes": True}


# ─── User ───────────────────────────────

class UserResponse(BaseModel):
    id: uuid.UUID
    email: str
    name: Optional[str]
    avatar_url: Optional[str]
    is_active: bool
    last_login: Optional[datetime]
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}


class UpdateUserRequest(BaseModel):
    name: Optional[str] = None
    avatar_url: Optional[str] = None


# ─── Account (OAuth) ────────────────────

class AccountResponse(BaseModel):
    id: uuid.UUID
    provider: str
    provider_id: str
    created_at: datetime

    model_config = {"from_attributes": True}


class UserWithAccountsResponse(BaseModel):
    id: uuid.UUID
    email: str
    name: Optional[str]
    avatar_url: Optional[str]
    is_active: bool
    accounts: list[AccountResponse]
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}


# ─── Token ──────────────────────────────

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


# ─── Error Response (reusable) ──────────

class ErrorResponse(BaseModel):
    detail: str
    code: Optional[str] = None