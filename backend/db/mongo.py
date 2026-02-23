from motor.motor_asyncio import AsyncIOMotorClient
from config import MONGO_URI, DB_NAME

client = None
database = None

async def connect_to_mongo():
    global client, database
    client = AsyncIOMotorClient(MONGO_URI)
    database = client[DB_NAME]
    print("✅ Connected to MongoDB")

async def close_mongo_connection():
    global client
    client.close()
    print("❌ MongoDB connection closed")