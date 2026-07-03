import { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";
import "./predict.css";

function Predict() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [form, setForm] = useState({
    age: "",
    gender: "Male",
    hypertension: 0,
    heart_disease: 0,
    ever_married: "Yes",
    work_type: "Private",
    Residence_type: "Urban",
    avg_glucose_level: "",
    bmi: "",
    smoking_status: "never smoked",
  });

  function change(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function predict() {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://127.0.0.1:5000/predict",
        form
      );

      setResult(res.data);
    } catch (error) {
      console.error(error);
      alert("Prediction failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="predict-page">

      <div className="dashboard-grid">

        {/* LEFT PANEL */}
        <div className="glass-panel">

          <h1>Patient Assessment</h1>

          <p className="panel-subtitle">
            Enter patient information for stroke risk analysis.
          </p>

          {/* PERSONAL INFO */}
          <div className="form-section">
            <h3>Personal Information</h3>

            <div className="input-grid">

              <div>
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={change}
                  autoComplete="off"
                />
              </div>

              <div>
                <label>Gender</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={change}
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div>
                <label>Ever Married</label>
                <select
                  name="ever_married"
                  value={form.ever_married}
                  onChange={change}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

            </div>
          </div>

          {/* MEDICAL */}
          <div className="form-section">
            <h3>Medical History</h3>

            <div className="input-grid">

              <div>
                <label>Hypertension</label>
                <select
                  name="hypertension"
                  value={form.hypertension}
                  onChange={change}
                >
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </div>

              <div>
                <label>Heart Disease</label>
                <select
                  name="heart_disease"
                  value={form.heart_disease}
                  onChange={change}
                >
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </div>

            </div>
          </div>

          {/* LIFESTYLE */}
          <div className="form-section">
            <h3>Lifestyle</h3>

            <div className="input-grid">

              <div>
                <label>Smoking Status</label>
                <select
                  name="smoking_status"
                  value={form.smoking_status}
                  onChange={change}
                >
                  <option>never smoked</option>
                  <option>formerly smoked</option>
                  <option>smokes</option>
                  <option>Unknown</option>
                </select>
              </div>

              <div>
                <label>Work Type</label>
                <select
                  name="work_type"
                  value={form.work_type}
                  onChange={change}
                >
                  <option>Private</option>
                  <option>Self-employed</option>
                  <option>Govt_job</option>
                  <option>children</option>
                  <option>Never_worked</option>
                </select>
              </div>

              <div>
                <label>Residence Type</label>
                <select
                  name="Residence_type"
                  value={form.Residence_type}
                  onChange={change}
                >
                  <option>Urban</option>
                  <option>Rural</option>
                </select>
              </div>

            </div>
          </div>

          {/* CLINICAL */}
          <div className="form-section">
            <h3>Clinical Measurements</h3>

            <div className="input-grid">

              <div>
                <label>Average Glucose Level</label>
                <input
                  type="number"
                  step="0.01"
                  name="avg_glucose_level"
                  value={form.avg_glucose_level}
                  onChange={change}
                  autoComplete="off"
                />
              </div>

              <div>
                <label>BMI</label>
                <input
                  type="number"
                  step="0.1"
                  name="bmi"
                  value={form.bmi}
                  onChange={change}
                  autoComplete="off"
                />
              </div>

            </div>
          </div>

          <button
            className="predict-btn"
            onClick={predict}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze Stroke Risk"}
          </button>

        </div>

        {/* RIGHT PANEL */}

        <div className="glass-panel result-panel">

          {!result ? (
            <div className="empty-state">

              <h2>Awaiting Assessment</h2>

              <p>
                Complete the patient form and run
                the prediction model.
              </p>

            </div>
          ) : (
            <ResultCard result={result} />
          )}

        </div>

      </div>

    </div>
  );
}

export default Predict;