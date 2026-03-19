from fastapi import FastAPI

from src.middleware.cors import setup_cors
from src.middleware.requireAuth import AuthContextMiddleware
from src.routes import auth, health

app = FastAPI()

setup_cors(app)
app.add_middleware(AuthContextMiddleware)

app.include_router(auth.router)
app.include_router(health.router)
