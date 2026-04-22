import joblib
import numpy as np
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "models" / "car_price_model.pkl"
SCALER_PATH = BASE_DIR / "models" / "car_price_scaler.pkl"

model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)

def predict_price(features: list) -> float:
    input_array = np.array(features).reshape(1, -1)
    scaled_array = scaler.transform(input_array)
    prediction = model.predict(scaled_array)
    return round(float(prediction[0]), 2)