from pydantic import BaseModel, EmailStr


class SignupSchema(BaseModel):
    full_name: str
    email: EmailStr
    password: str
    gender: str


class SigninSchema(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    message: str
    access_token: str
    token_type: str = "bearer"