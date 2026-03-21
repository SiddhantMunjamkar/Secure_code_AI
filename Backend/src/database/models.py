from sqlalchemy import Column, String, DateTime, Boolean, ForeignKey, Index,Integer
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
    installations = relationship(
        "GitHubInstallation", back_populates="user", cascade="all,delete-orphan")


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


# ─────────────────────────────────────────
# GITHUB APP INSTALLATION
# ─────────────────────────────────────────

class GitHubInstallation(Base):
    __tablename__ = "github_installations"

    id              = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id         = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    installation_id = Column(String, unique=True, nullable=False)  # GitHub's installation ID string
    account_login   = Column(String, nullable=False)               # github username or org
    account_type    = Column(String, nullable=False)               # "User" or "Organization"
    created_at      = Column(DateTime, server_default=func.now())

    # relationships
    user         = relationship("User", back_populates="installations")
    repositories = relationship("Repository", back_populates="installation", cascade="all, delete-orphan")

    __table_args__ = (
        Index("ix_installations_user_id", "user_id"),
    )



# ─────────────────────────────────────────
# REPOSITORY
# ─────────────────────────────────────────

class Repository(Base):
    __tablename__ = "repositories"

    id              = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    installation_id = Column(UUID(as_uuid=True), ForeignKey("github_installations.id", ondelete="CASCADE"), nullable=False)
    github_repo_id  = Column(String, nullable=False)       # GitHub's repo ID
    full_name       = Column(String, nullable=False)       # "owner/repo-name"
    name            = Column(String, nullable=False)       # "repo-name"
    is_monitored    = Column(Boolean, default=False)       # user toggles this
    created_at      = Column(DateTime, server_default=func.now())

    # relationships
    installation  = relationship("GitHubInstallation", back_populates="repositories")
    pull_requests = relationship("PullRequest", back_populates="repository", cascade="all, delete-orphan")

    __table_args__ = (
        Index("ix_repositories_installation_id", "installation_id"),
        Index("ix_repositories_github_repo_id", "github_repo_id", unique=True),
    )


# ─────────────────────────────────────────
# PULL REQUEST
# ─────────────────────────────────────────

class PullRequest(Base):
    __tablename__ = "pull_requests"

    id          = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    repo_id     = Column(UUID(as_uuid=True), ForeignKey("repositories.id", ondelete="CASCADE"), nullable=False)
    pr_number   = Column(Integer, nullable=False)
    title       = Column(String, nullable=True)
    author      = Column(String, nullable=True)
    commit_sha  = Column(String(40), nullable=False)
    status      = Column(String, default="PENDING")        # PENDING/RUNNING/COMPLETED/FAILED
    analyzed_at = Column(DateTime, nullable=True)
    created_at  = Column(DateTime, server_default=func.now())

    # relationships
    repository = relationship("Repository", back_populates="pull_requests")

    __table_args__ = (
        # fast lookup when webhook fires
        Index("ix_pr_repo_number", "repo_id", "pr_number"),
        # prevent duplicate processing of same commit
        Index("ix_pr_repo_commit", "repo_id", "commit_sha", unique=True),
    )


