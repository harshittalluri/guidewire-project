# app/services/prediction_service.py

from app.ml.risk_model import calculate_risk

def get_risk_prediction(data: dict):
    income = data.get("income", 0)
    claims = data.get("claims", 0)
    trust_score = data.get("trust_score", 0)

    risk = calculate_risk(income, claims, trust_score)

    return {
        "risk_level": risk
    }