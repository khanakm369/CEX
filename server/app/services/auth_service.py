from app.core.database import db
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
)


async def signup_user(data):
    existing_user = await db.users.find_one({"email": data.email})

    if existing_user:
        raise ValueError("User already exists")

    user_doc = {
        "full_name": data.full_name,
        "email": data.email,
        "password": hash_password(data.password),
        "gender": data.gender,
    }

    result = await db.users.insert_one(user_doc)

    token = create_access_token(
        {
            "user_id": str(result.inserted_id),
            "email": data.email,
        }
    )

    return token


async def signin_user(data):
    user = await db.users.find_one({"email": data.email})

    if not user:
        return None

    if not verify_password(data.password, user["password"]):
        return None

    token = create_access_token(
        {
            "user_id": str(user["_id"]),
            "email": user["email"],
        }
    )

    return token