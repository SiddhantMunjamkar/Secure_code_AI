from fastapi import FastAPI

from src.middleware.cors import setup_cors
from src.routes import auth, health

app = FastAPI()

setup_cors(app)

app.include_router(auth.router)
app.include_router(health.router)
