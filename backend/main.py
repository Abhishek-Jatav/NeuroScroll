import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db.mongo import connect_to_mongo, close_mongo_connection
from routers import health, user, session, event, ai_test, blink_test, gesture_test
from routers import websocket

load_dotenv()

# Read allowed origins from .env (comma separated)
origins = os.getenv("ALLOWED_ORIGINS", "")
origins = [origin.strip() for origin in origins.split(",") if origin.strip()]

print("Allowed Origins:", origins)

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins if origins else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    await connect_to_mongo()

@app.on_event("shutdown")
async def shutdown():
    await close_mongo_connection()

# Routers
app.include_router(health.router)
app.include_router(user.router)
app.include_router(session.router)
app.include_router(event.router)
app.include_router(ai_test.router)
app.include_router(blink_test.router)
app.include_router(gesture_test.router)
app.include_router(websocket.router)