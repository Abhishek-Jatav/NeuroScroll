from fastapi import APIRouter, HTTPException
from models.session_model import SessionCreate
from db import mongo
from datetime import datetime

router = APIRouter(prefix="/sessions", tags=["Sessions"])


@router.post("/")
async def create_session(session: SessionCreate):

    new_session = {
        "user_id": session.user_id,
        "started_at": datetime.utcnow(),
        "ended_at": None,
        "total_blinks": 0,
        "total_double_blinks": 0,
        "total_long_blinks": 0
    }

    result = await mongo.database["sessions"].insert_one(new_session)

    return {
        "message": "Session started",
        "session_id": str(result.inserted_id)
    }