from sqlalchemy import Column, Integer, Float, String
from app.core.database import Base

class InsurancePlan(Base):
    __tablename__ = "insurance_plans"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    premium = Column(Float)
    coverage = Column(Float)