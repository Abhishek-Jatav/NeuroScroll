from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
@router.get("/ping")  # Support both routes
async def health_check():
    return {"status": "NeuroScroll Backend Running"}