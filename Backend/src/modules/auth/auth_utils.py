from jose import jwt, JWTError
from datetime import datetime, timedelta
from src.config.setting import settings
import logging
from passlib.context import CryptContext

logger = logging.getLogger(__name__)


def create_token(user_id: str):
    try:
        payload = {
            "sub": user_id,
            "exp": datetime.utcnow() + timedelta(hours=24)
        }
        token = jwt.encode(payload, settings.JWT_SECRET, algorithm="HS256")
        return token
    except JWTError as e:
        logger.error(f"JWT encoding error: {str(e)}")
        raise Exception("Failed to create authentication token")
    except Exception as e:
        logger.error(f"Unexpected error creating token: {str(e)}")
        raise


def verify_token(token: str):
    try:
        payload = jwt.decode(
            token, settings.JWT_SECRET, algorithms=["HS256"])
        return payload
    except JWTError as e:
        logger.error(f"JWT decoding error: {str(e)}")
        raise Exception("Failed to verify authentication token")
    except Exception as e:
        logger.error(f"Unexpected error verifying token: {str(e)}")
        raise


# Password hashing context with bcrypt
pwd_context = CryptContext(
    schemes=["bcrypt_sha256"],
    deprecated="auto",
    bcrypt_sha256__rounds=12  # production-grade cost factor
)


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)
