# 🧠 StrokeAI – Machine Learning Based Stroke Risk Prediction System

StrokeAI is a full-stack web application that predicts an individual's risk of stroke using Machine Learning. The system compares multiple classification algorithms, evaluates their performance, and deploys the best-performing model through an interactive web interface.

---

## 📌 Project Overview

Stroke is one of the leading causes of death and long-term disability worldwide. Early identification of high-risk individuals can help enable timely medical intervention.

This project uses patient healthcare data to train Machine Learning models capable of predicting stroke risk. The trained model is deployed using a Flask backend and a React frontend, allowing users to enter patient details and receive instant predictions.

---

## ✨ Features

- Predict stroke risk from patient health information
- User-friendly React interface
- Flask REST API backend
- Machine Learning model integration
- Performance analysis dashboard
- Model comparison charts
- Confusion matrix visualizations
- Responsive modern dark UI

---

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- CSS3
- Axios

### Backend
- Flask
- Flask-CORS

### Machine Learning
- Python
- Pandas
- NumPy
- Scikit-learn
- Matplotlib
- Seaborn
- Joblib

---

## 📊 Machine Learning Models

The following classification models were trained and evaluated:

- Logistic Regression
- Decision Tree
- K-Nearest Neighbors (KNN)

### Evaluation Metrics

- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC
- Confusion Matrix

After comparison, **Logistic Regression** was selected as the final prediction model due to its superior Recall and F1 Score, making it more effective at identifying actual stroke cases.

---

## 📁 Project Structure

```
StrokeAI/
│
├── backend/
│   ├── saved_models/
│   ├── app.py
│   ├── train.py
│   ├── requirements.txt
│   └── healthcare-dataset-stroke-data.csv
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── .gitignore
└── README.md
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/StrokeAI.git

cd StrokeAI
```

---

### 2. Backend Setup

```bash
cd backend

pip install -r requirements.txt

python app.py
```

The Flask server starts at:

```
http://127.0.0.1:5000
```

---

### 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

The React application starts at:

```
http://localhost:5173
```

---

## 📈 Workflow

```
Patient Input
      │
      ▼
React Frontend
      │
      ▼
Flask API
      │
      ▼
Data Preprocessing
      │
      ▼
Machine Learning Model
      │
      ▼
Stroke Risk Prediction
```

---

## 📷 Application Pages

- Home
- Predict Stroke Risk
- Model Analysis
- About

---

## 📌 Dataset

The project uses the **Healthcare Stroke Dataset**, containing patient demographic and medical information such as:

- Age
- Gender
- Hypertension
- Heart Disease
- Average Glucose Level
- BMI
- Smoking Status
- Work Type
- Residence Type
- Marital Status

---

## 🎯 Future Improvements

- Deploy the application online
- Add probability/confidence score
- Improve model accuracy using ensemble methods
- Integrate real-time healthcare datasets
- Add user authentication
- Include doctor dashboard and patient history

---

## 👩‍💻 Author

**Team TERABYTE**

Machine Learning & Full Stack Development Project

---

## 📄 License

This project is developed for educational and academic purposes.