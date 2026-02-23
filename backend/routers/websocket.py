from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from ai.gesture_engine import GestureEngine

router = APIRouter()

@router.websocket("/ws/gesture")
async def gesture_websocket(websocket: WebSocket):
    await websocket.accept()
    print("WebSocket connected")

    engine = GestureEngine(threshold=0.25)

    try:
        while True:
            data = await websocket.receive_json()

            left_eye = data.get("left_eye")
            right_eye = data.get("right_eye")

            result = engine.process(left_eye, right_eye)

            print("EAR:", result["avgEAR"], "Gesture:", result["gesture"])

            await websocket.send_json(result)

    except WebSocketDisconnect:
        print("Client disconnected")