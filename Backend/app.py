from fastapi import FastAPI
from starlette.middleware.sessions import SessionMiddleware

from src.config.setting import settings
from src.middleware.cors import setup_cors
from src.middleware.requireAuth import AuthContextMiddleware
from src.routes import auth, health

app = FastAPI()

setup_cors(app)
app.add_middleware(
	SessionMiddleware,
	secret_key=settings.JWT_SECRET,
	same_site="lax",
	https_only=False,
)
app.add_middleware(AuthContextMiddleware)

app.include_router(auth.router)
app.include_router(health.router)
