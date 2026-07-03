from flask import Flask, request, jsonify
from flask_cors import CORS

import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

# =========================
# Load Models
# =========================

lr = joblib.load("saved_models/logistic.pkl")

scaler = joblib.load("saved_models/scaler.pkl")

feature_columns = joblib.load(
    "saved_models/features.pkl"
)

# =========================
# Helper Function
# =========================

def prepare_input(data):

    df = pd.DataFrame([data])


    # Convert numeric fields
    df["age"] = df["age"].astype(float)
    df["avg_glucose_level"] = df["avg_glucose_level"].astype(float)
    df["bmi"] = df["bmi"].astype(float)



    # Create same features as training

    df["age_group"] = pd.cut(
        df["age"],
        bins=[-1,18,35,50,65,120],
        labels=[
            "child",
            "young_adult",
            "middle_aged",
            "senior",
            "elderly"
        ]
    )


    df["bmi_category"] = pd.cut(
        df["bmi"],
        bins=[0,18.5,25,30,100],
        labels=[
            "underweight",
            "normal",
            "overweight",
            "obese"
        ]
    )


    df["glucose_category"] = pd.cut(
        df["avg_glucose_level"],
        bins=[0,100,125,1000],
        labels=[
            "normal",
            "prediabetic",
            "diabetic"
        ]
    )


    df["high_risk_flag"] = (
        (df["hypertension"] == 1)
        |
        (df["heart_disease"] == 1)
        |
        (df["glucose_category"]=="diabetic")
    ).astype(int)



    # Encode categories

    cat_cols = [
        "gender",
        "ever_married",
        "work_type",
        "Residence_type",
        "smoking_status",
        "age_group",
        "bmi_category",
        "glucose_category"
    ]


    df = pd.get_dummies(
        df,
        columns=cat_cols,
        drop_first=True
    )


    # Match training columns

    df = df.reindex(
        columns=feature_columns,
        fill_value=0
    )


    return df

# =========================
# Routes
# =========================

@app.route("/")
def home():
    return {
        "message": "Stroke Prediction API Running"
    }

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    df = prepare_input(data)

    scaled_df = scaler.transform(df)

    pred_lr = int(
        lr.predict(scaled_df)[0]
    )



    final_prediction = pred_lr

    return jsonify({

        "final_prediction": final_prediction,

        "risk":
            "High Risk"
            if final_prediction == 1
            else "Low Risk"

    })

if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000
    )