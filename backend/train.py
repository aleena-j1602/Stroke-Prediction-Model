import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier

# =========================
# Load Dataset
# =========================

df = pd.read_csv("healthcare-dataset-stroke-data.xls")

# =========================
# Preprocessing
# =========================

df = df.drop(columns=["id"])

df = df[df["gender"] != "Other"]

df["bmi"] = df["bmi"].fillna(df["bmi"].median())

cat_cols = [
    "gender",
    "ever_married",
    "work_type",
    "Residence_type",
    "smoking_status"
]

df = pd.get_dummies(
    df,
    columns=cat_cols,
    drop_first=True
)

X = df.drop("stroke", axis=1)
y = df["stroke"]

# Save feature order
joblib.dump(list(X.columns), "saved_models/features.pkl")

# =========================
# Split
# =========================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# =========================
# Scaling
# =========================

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# =========================
# Logistic Regression
# =========================

lr = LogisticRegression(
    max_iter=2000,
    class_weight="balanced",
    random_state=42
)

lr.fit(X_train_scaled, y_train)

# =========================
# Decision Tree
# =========================

dt = DecisionTreeClassifier(
    max_depth=8,
    class_weight="balanced",
    random_state=42
)

dt.fit(X_train, y_train)

# =========================
# KNN
# =========================

best_k = 5

knn = KNeighborsClassifier(
    n_neighbors=best_k
)

knn.fit(X_train_scaled, y_train)

# =========================
# Save Models
# =========================

joblib.dump(lr, "saved_models/logistic.pkl")
joblib.dump(dt, "saved_models/tree.pkl")
joblib.dump(knn, "saved_models/knn.pkl")
joblib.dump(scaler, "saved_models/scaler.pkl")

print("Models saved successfully.")