from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class SessionCreate(BaseModel):
    user_id: str


class SessionInDB(BaseModel):
    user_id: str
    started_at: datetime
    ended_at: Optional[datetime] = None
    total_blinks: int = 0
    total_double_blinks: int = 0
    total_long_blinks: int = 0