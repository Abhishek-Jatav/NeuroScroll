from pydantic import BaseModel
from datetime import datetime


class GestureEventCreate(BaseModel):
    session_id: str
    gesture_type: str   # blink | double_blink | long_blink


class GestureEventInDB(BaseModel):
    session_id: str
    gesture_type: str
    timestamp: datetime