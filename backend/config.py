import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")

if not MONGO_URI:
    raise ValueError("❌ MONGO_URI not found in .env")

if not DB_NAME:
    raise ValueError("❌ DB_NAME not found in .env")