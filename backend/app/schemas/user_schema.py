from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    email: str
    zone: str
    weekly_income: float

class UserResponse(UserCreate):
    id: int

    class Config:
        from_attributes = True