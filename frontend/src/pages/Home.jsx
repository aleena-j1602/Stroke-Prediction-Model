import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Ambient Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-badge">
          <span className="pulse-dot"></span>
          AI-Powered Healthcare Analytics
        </div>

        <h1>
          Predict Stroke Risk <br />
          With Machine Learning
        </h1>

        <p>
          An intelligent healthcare analytics platform that compares
          Logistic Regression, Decision Tree, and KNN models to
          assess stroke risk and provide data-driven insights.
        </p>

        <div className="hero-buttons">
          <Link to="/predict">
            <button className="primary-btn">
              Start Assessment
            </button>
          </Link>

          <Link to="/analysis">
            <button className="secondary-btn">
              View Analytics
            </button>
          </Link>
        </div>

      </section>

      {/* Features */}
      <section className="features-section">

        <h2>
          Platform Features
        </h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>Multi-Model Prediction</h3>

            <p>
              Compare predictions from Logistic Regression,
              Decision Tree, and KNN simultaneously.
            </p>
          </div>

          <div className="feature-card">
            <h3>Healthcare Analytics</h3>

            <p>
              Analyze model performance through confusion
              matrices, recall scores, and evaluation metrics.
            </p>
          </div>

          <div className="feature-card">
            <h3>Risk Assessment</h3>

            <p>
              Generate patient-specific stroke risk assessments
              using machine learning techniques.
            </p>
          </div>

        </div>

      </section>

      {/* Models */}
      <section className="models-section">

        <h2>
          Models Used
        </h2>

        <p className="section-subtitle">
          Three machine learning models were trained and
          evaluated to determine the most effective approach
          for stroke prediction.
        </p>

        <div className="models-grid">

          <div className="model-card">
            <div className="model-icon">LR</div>

            <h3>Logistic Regression</h3>

            <p>
              A widely used classification algorithm
              known for strong performance on medical
              prediction tasks.
            </p>
          </div>

          <div className="model-card">
            <div className="model-icon">DT</div>

            <h3>Decision Tree</h3>

            <p>
              Provides rule-based predictions that are
              easy to interpret and visualize.
            </p>
          </div>

          <div className="model-card">
            <div className="model-icon">KNN</div>

            <h3>K-Nearest Neighbors</h3>

            <p>
              Predicts outcomes based on similarity
              between patients in the dataset.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">

        <h2>
          Ready to Assess Stroke Risk?
        </h2>

        <p>
          Enter patient information and compare
          predictions from multiple machine learning models.
        </p>

        <Link to="/predict">
          <button className="primary-btn">
            Begin Prediction
          </button>
        </Link>

      </section>

    </div>
  );
}

export default Home;