from fastapi import APIRouter
from ai.state_machine import BlinkStateMachine

router = APIRouter(prefix="/ai", tags=["AI Blink Test"])

# Global state machine instance (for testing)
blink_detector = BlinkStateMachine(threshold=0.25)


@router.post("/blink")
async def test_blink(data: dict):

    ear = data.get("ear")

    gesture = blink_detector.update(ear)

    return {
        "ear": ear,
        "gesture_detected": gesture
    }