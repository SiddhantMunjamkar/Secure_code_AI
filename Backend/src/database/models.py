from sqlalchemy import Column, String, DateTime, Boolean, ForeignKey, Index
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
import uuid


from src.database.base import Base


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=True)  # for email/password login
    avatar_url = Column(String, nullable=True)

    # email_verified = Column(DateTime, nullable=True)  # when email was confirmed
    is_active = Column(Boolean, default=True)  # soft delete
    last_login = Column(DateTime, nullable=True)  # for analytics

    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(),
                        onupdate=func.now())

    # Relationship
    accounts = relationship(
        "Account", back_populates="user", cascade="all,delete-orphan")


class Account(Base):
    __tablename__ = "accounts"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey(
        "users.id", ondelete="CASCADE"), nullable=False)
    provider = Column(String, nullable=False)  # "github", "google", etc
    provider_id = Column(String, nullable=False)  # OAuth sub id from provider

    access_token = Column(String, nullable=True)
    refresh_token = Column(String, nullable=True)

    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(),
                        onupdate=func.now())

    # Relationship
    user = relationship("User", back_populates="accounts")

    # Indexes for performance
    __table_args__ = (
        Index("ix_accounts_user_id", "user_id"),
        Index("ix_accounts_provider_provider_id",
              "provider", "provider_id", unique=True),
    )
