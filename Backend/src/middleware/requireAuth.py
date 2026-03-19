from fastapi import HTTPException, Request
from starlette.middleware.base import BaseHTTPMiddleware
from sqlalchemy import select

from src.config.cookie import AUTH_COOKIE_NAME
from src.database.connection import AsyncSessionLocal
from src.database.models import User
from src.modules.auth.auth_utils import verify_token


class AuthContextMiddleware(BaseHTTPMiddleware):
	async def dispatch(self, request: Request, call_next):
		request.state.auth_user = None

		# Always try to parse token from cookie (even on public paths)
		token = request.cookies.get(AUTH_COOKIE_NAME)
		if token:
			try:
				payload = verify_token(token)
				user_id = payload.get("sub")

				if user_id:
					async with AsyncSessionLocal() as session:
						stmt = select(User).where(User.id == user_id)
						result = await session.execute(stmt)
						user = result.scalars().first()

						if user:
							request.state.auth_user = {
								"id": str(user.id),
								"email": user.email,
								"name": user.name,
								"avatar_url": user.avatar_url,
								"is_active": user.is_active,
								"last_login": user.last_login,
								"created_at": user.created_at,
								"updated_at": user.updated_at,
							}
			except Exception:
				pass  # Token invalid, auth_user stays None

		return await call_next(request)


async def require_auth(request: Request):
	auth_user = getattr(request.state, "auth_user", None)
	if not auth_user:
		raise HTTPException(status_code=401, detail="Unauthorized")
	return auth_user
