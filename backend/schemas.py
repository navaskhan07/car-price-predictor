from pydantic import BaseModel

class CarFeatures(BaseModel):
    symboling: float
    wheelbase: float
    carlength: float
    carwidth: float
    carheight: float
    curbweight: float
    enginesize: float
    boreratio: float
    stroke: float
    compressionratio: float
    horsepower: float
    peakrpm: float
    citympg: float
    highwaympg: float

class PredictionResponse(BaseModel):
    predicted_price: str
    predicted_price_raw: float