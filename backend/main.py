from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import CarFeatures, PredictionResponse
from model import predict_price

app = FastAPI(title="Car Price Predictor API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://*.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "Car Price Predictor API is running"}

@app.post("/predict", response_model=PredictionResponse)
def predict(data: CarFeatures):
    features = [
        data.symboling, data.wheelbase, data.carlength,
        data.carwidth, data.carheight, data.curbweight,
        data.enginesize, data.boreratio, data.stroke,
        data.compressionratio, data.horsepower, data.peakrpm,
        data.citympg, data.highwaympg
    ]
    price = predict_price(features)
    return PredictionResponse(
        predicted_price=f"${price:,.2f}",
        predicted_price_raw=price
    )