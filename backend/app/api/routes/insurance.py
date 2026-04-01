from fastapi import APIRouter

router = APIRouter()

@router.get("/plans")
def get_plans():
    return [
        {"name": "Basic", "premium": 30},
        {"name": "Standard", "premium": 50}
    ]