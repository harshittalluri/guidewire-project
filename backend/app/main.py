from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import auth
from app.api.routes import auth, user, insurance, payout, fraud
from app.api.routes import prediction   

from app.core.database import Base, engine

# DB
Base.metadata.create_all(bind=engine)

app = FastAPI(title="GigShield AI Backend")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(user.router, prefix="/users", tags=["Users"])
app.include_router(insurance.router, prefix="/insurance", tags=["Insurance"])

# ✅ FIXED PREDICTION ROUTE
app.include_router(prediction.router, prefix="/prediction", tags=["Prediction"])

app.include_router(payout.router, prefix="/payout", tags=["Payout"])
app.include_router(fraud.router, prefix="/fraud", tags=["Fraud"])

# Root
@app.get("/")
def root():
    return {"message": "GigShield AI Running 🚀"}