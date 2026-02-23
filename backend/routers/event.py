from fastapi import APIRouter
from models.event_model import GestureEventCreate
from db import mongo
from datetime import datetime
from bson import ObjectId

router = APIRouter(prefix="/events", tags=["Gesture Events"])


@router.post("/")
async def create_gesture_event(event: GestureEventCreate):

    new_event = {
        "session_id": event.session_id,
        "gesture_type": event.gesture_type,
        "timestamp": datetime.utcnow()
    }

    await mongo.database["gesture_events"].insert_one(new_event)

    # Update session counters
    session_object_id = ObjectId(event.session_id)

    if event.gesture_type == "blink":
        await mongo.database["sessions"].update_one(
            {"_id": session_object_id},
            {"$inc": {"total_blinks": 1}}
        )

    elif event.gesture_type == "double_blink":
        await mongo.database["sessions"].update_one(
            {"_id": session_object_id},
            {"$inc": {"total_double_blinks": 1}}
        )

    elif event.gesture_type == "long_blink":
        await mongo.database["sessions"].update_one(
            {"_id": session_object_id},
            {"$inc": {"total_long_blinks": 1}}
        )

    return {"message": "Gesture event recorded"}