from fastapi import APIRouter

router = APIRouter(prefix="/api/v1/auth", tags=["auth"])


@router.post("/signup")
async def signup():
    return {"message": "signup"}


@router.post("/login")
async def login():
    return {"message": "login"}


@router.get("/me")
async def me():
    return {"message": "me"}
