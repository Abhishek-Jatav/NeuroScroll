from fastapi import APIRouter, HTTPException
from models.user_model import UserCreate
from db import mongo
from datetime import datetime

router = APIRouter(prefix="/users", tags=["Users"])


@router.post("/")
async def create_user(user: UserCreate):

    existing_user = await mongo.database["users"].find_one(
        {"email": user.email}
    )

    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    new_user = {
        "email": user.email,
        "password": user.password,
        "created_at": datetime.utcnow()
    }

    result = await mongo.database["users"].insert_one(new_user)

    return {
        "message": "User created successfully",
        "user_id": str(result.inserted_id)
    }


@router.get("/")
async def get_all_users():

    users_cursor = mongo.database["users"].find()

    users = []
    async for user in users_cursor:
        user["_id"] = str(user["_id"])
        users.append(user)

    return users