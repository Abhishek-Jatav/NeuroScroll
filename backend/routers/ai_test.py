from fastapi import APIRouter
from ai.ear_calculator import calculate_both_ears

router = APIRouter(prefix="/ai", tags=["AI Test"])


@router.post("/ear")
async def test_ear(data: dict):

    left_eye = data.get("left_eye")
    right_eye = data.get("right_eye")

    result = calculate_both_ears(left_eye, right_eye)

    return result