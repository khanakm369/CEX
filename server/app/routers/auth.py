@router.post("/signup")
async def signup(payload: SignupSchema):
    token = await signup_user(payload)
    return {
        "message": "User created successfully",
        "access_token": token
    }