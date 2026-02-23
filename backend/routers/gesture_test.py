from fastapi import APIRouter
from ai.gesture_engine import GestureEngine

router = APIRouter(prefix="/ai", tags=["Gesture Engine"])

# global engine instance
engine = GestureEngine(threshold=0.25)


@router.post("/process")
async def process_gesture(data: dict):

    left_eye = data.get("left_eye")
    right_eye = data.get("right_eye")

    result = engine.process(left_eye, right_eye)

    return result