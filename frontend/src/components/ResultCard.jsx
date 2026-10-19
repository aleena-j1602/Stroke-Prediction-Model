function ResultCard({ result }) {
  const highRisk = result.final_prediction === 1;

  const strokeProbability = Math.min(
    100,
    Math.max(0, Number(result.stroke_probability) || 0)
  );

  const noStrokeProbability = Math.min(
    100,
    Math.max(
      0,
      Number(
        result.no_stroke_probability ??
        (100 - strokeProbability)
      ) || 0
    )
  );

  const circumference = 2 * Math.PI * 52;

  const progress =
    (strokeProbability / 100) * circumference;

  return (
    <>
      <style>{`

        .result-card {
          width: 100%;
          box-sizing: border-box;
          padding: 30px;
          background: #0f0f17;
          border: 1px solid #292936;
          border-radius: 20px;
          color: #f4f4f5;
          font-family: Inter, sans-serif;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          animation: resultAppear 0.5s ease;
        }

        @keyframes resultAppear {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .result-card * {
          box-sizing: border-box;
        }

        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-bottom: 28px;
        }

        .result-eyebrow,
        .section-label,
        .status-label {
          display: block;
          color: #a1a1aa;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .result-header h2 {
          margin: 10px 0 5px;
          font-size: 27px;
          font-weight: 650;
          letter-spacing: -0.7px;
        }

        .result-subtitle {
          margin: 0;
          color: #92929f;
          font-size: 13px;
        }

        .result-icon {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          border: 1px solid #353542;
          border-radius: 14px;
          background: #191923;
          color: #f59e0b;
          font-size: 23px;
          font-weight: 700;
        }

        /* Classification */

        .status-panel {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 19px;
          border: 1px solid;
          border-radius: 14px;
          margin-bottom: 24px;
        }

        .status-high {
          background: rgba(239,68,68,0.07);
          border-color: rgba(239,68,68,0.25);
        }

        .status-low {
          background: rgba(34,197,94,0.06);
          border-color: rgba(34,197,94,0.2);
        }

        .status-indicator {
          width: 9px;
          height: 9px;
          flex-shrink: 0;
          border-radius: 50%;
        }

        .status-high .status-indicator {
          background: #f87171;
          box-shadow: 0 0 12px rgba(248,113,113,0.5);
        }

        .status-low .status-indicator {
          background: #4ade80;
          box-shadow: 0 0 12px rgba(74,222,128,0.4);
        }

        .status-content {
          flex: 1;
          min-width: 0;
        }

        .status-content h3 {
          margin: 7px 0;
          font-size: 16px;
        }

        .status-content p {
          margin: 0;
          color: #a1a1aa;
          font-size: 12px;
          line-height: 1.7;
        }

        .status-tag {
          padding: 6px 9px;
          border-radius: 6px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.6px;
          white-space: nowrap;
        }

        .status-high .status-tag {
          color: #fca5a5;
          background: rgba(239,68,68,0.12);
        }

        .status-low .status-tag {
          color: #86efac;
          background: rgba(34,197,94,0.12);
        }

        /* Probability */

        .probability-card {
          padding: 23px;
          background: #14141e;
          border: 1px solid #292936;
          border-radius: 16px;
          margin-bottom: 24px;
        }

        .probability-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 25px;
        }

        .probability-heading h3 {
          margin: 9px 0 0;
          font-size: 17px;
          font-weight: 600;
        }

        .probability-badge {
          padding: 7px 10px;
          border: 1px solid #35313a;
          border-radius: 7px;
          color: #fbbf24;
          background: rgba(245,158,11,0.06);
          font-size: 10px;
        }

        .probability-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
        }

        .probability-ring {
          position: relative;
          width: 150px;
          height: 150px;
          flex-shrink: 0;
        }

        .probability-ring svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
          overflow: visible;
        }

        .probability-ring circle {
          fill: none;
          stroke-width: 8;
        }

        .ring-track {
          stroke: #292936;
        }

        .ring-progress {
          stroke: #f59e0b;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.8s ease;
          filter: drop-shadow(0 0 5px rgba(245,158,11,0.2));
        }

        .ring-value {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .ring-value span {
          color: #fbbf24;
          font-size: 26px;
          font-weight: 750;
          letter-spacing: -0.8px;
        }

        .ring-value small {
          margin-top: 5px;
          color: #92929f;
          font-size: 11px;
        }

        .probability-details {
          flex: 1;
          min-width: 0;
        }

        .probability-detail-row {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 17px 0;
          color: #b4b4c0;
          font-size: 12px;
        }

        .probability-detail-row strong {
          margin-left: auto;
          color: #f4f4f5;
          font-size: 13px;
          white-space: nowrap;
        }

        .detail-dot {
          width: 8px;
          height: 8px;
          flex-shrink: 0;
          border-radius: 3px;
        }

        .stroke-dot {
          background: #f59e0b;
        }

        .normal-dot {
          background: #64748b;
        }

        .probability-divider {
          height: 1px;
          background: #292936;
          margin: 20px 0 15px;
        }

        .probability-explanation {
          margin: 0;
          color: #858593;
          font-size: 11px;
          line-height: 1.8;
        }

        /* Recommendation */

        .recommendation-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px;
          border: 1px solid #292936;
          border-radius: 14px;
          background: #14141e;
        }

        .recommendation-high {
          border-left: 3px solid #f87171;
        }

        .recommendation-low {
          border-left: 3px solid #f59e0b;
        }

        .recommendation-icon {
          display: grid;
          place-items: center;
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #22222d;
          color: #fbbf24;
          font-size: 18px;
          font-weight: 700;
        }

        .recommendation-content {
          flex: 1;
        }

        .recommendation-content h3 {
          margin: 8px 0 10px;
          font-size: 16px;
        }

        .recommendation-content p {
          margin: 0;
          color: #a1a1aa;
          font-size: 13px;
          line-height: 1.9;
        }

        /* Footer */

        .result-footer {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
          padding-top: 17px;
          border-top: 1px solid #292936;
          color: #686875;
          font-size: 9px;
          letter-spacing: 0.8px;
        }

        @media (max-width: 600px) {
          .result-card {
            padding: 18px;
            border-radius: 16px;
          }

          .result-header h2 {
            font-size: 23px;
          }

          .probability-card {
            padding: 17px;
          }

          .probability-content {
            flex-direction: column;
            gap: 15px;
          }

          .probability-ring {
            width: 145px;
            height: 145px;
          }

          .probability-details {
            width: 100%;
          }

          .probability-heading h3 {
            font-size: 15px;
          }

          .status-panel {
            padding: 14px;
            gap: 10px;
          }

          .status-content h3 {
            font-size: 14px;
          }

          .status-tag {
            font-size: 8px;
          }

          .result-footer {
            flex-direction: column;
          }
        }

      `}</style>

      <div className="result-card">

        {/* Header */}

        <div className="result-header">
          <div>
            <span className="result-eyebrow">
              AI HEALTH ANALYSIS
            </span>

            <h2>Assessment Result</h2>

            <p className="result-subtitle">
              Logistic Regression Model
            </p>
          </div>

          <div className="result-icon">
            {highRisk ? "!" : "✓"}
          </div>
        </div>

        {/* Classification */}

        <div
          className={`status-panel ${
            highRisk ? "status-high" : "status-low"
          }`}
        >
          <div className="status-indicator" />

          <div className="status-content">
            <span className="status-label">
              MODEL CLASSIFICATION
            </span>

            <h3>
              {highRisk
                ? "Stroke Risk Detected"
                : "Lower Predicted Risk"}
            </h3>

            <p>
              {highRisk
                ? "The model classified this assessment as positive."
                : "The model classified this assessment as negative."}
            </p>
          </div>

          <span className="status-tag">
            {highRisk ? "POSITIVE" : "NEGATIVE"}
          </span>
        </div>

        {/* Probability */}

        <div className="probability-card">
          <div className="probability-heading">
            <div>
              <span className="section-label">
                MODEL OUTPUT
              </span>

              <h3>Estimated Stroke Probability</h3>
            </div>

            <span className="probability-badge">
              Logistic Regression
            </span>
          </div>

          <div className="probability-content">

            <div className="probability-ring">
              <svg viewBox="0 0 120 120">
                <circle
                  className="ring-track"
                  cx="60"
                  cy="60"
                  r="52"
                />

                <circle
                  className="ring-progress"
                  cx="60"
                  cy="60"
                  r="52"
                  strokeDasharray={circumference}
                  strokeDashoffset={
                    circumference - progress
                  }
                />
              </svg>

              <div className="ring-value">
                <span>
                  {strokeProbability.toFixed(1)}%
                </span>

                <small>Probability</small>
              </div>
            </div>

            <div className="probability-details">
              <div className="probability-detail-row">
                <span className="detail-dot stroke-dot" />

                <span>Stroke</span>

                <strong>
                  {strokeProbability.toFixed(2)}%
                </strong>
              </div>

              <div className="probability-detail-row">
                <span className="detail-dot normal-dot" />

                <span>No stroke</span>

                <strong>
                  {noStrokeProbability.toFixed(2)}%
                </strong>
              </div>

              <div className="probability-divider" />

              <p className="probability-explanation">
                These values represent the model's estimated
                probabilities. They are not a confirmed medical
                diagnosis or a substitute for clinical assessment.
              </p>
            </div>

          </div>
        </div>

        {/* Recommendation */}

        <div
          className={`recommendation-card ${
            highRisk
              ? "recommendation-high"
              : "recommendation-low"
          }`}
        >
          <div className="recommendation-icon">
            {highRisk ? "↗" : "i"}
          </div>

          <div className="recommendation-content">
            <span className="section-label">
              NEXT STEPS
            </span>

            <h3>Recommendation</h3>

            <p>
              {highRisk
                ? "The model identified a positive stroke-risk classification. Consult a qualified healthcare professional for a proper medical assessment."
                : "The model identified a negative stroke-risk classification. This does not rule out stroke risk. Seek medical advice if you have symptoms or concerns."}
            </p>
          </div>
        </div>

        {/* Footer */}

        <div className="result-footer">
          <span>MODEL: LOGISTIC REGRESSION</span>

          <span>FOR EDUCATIONAL USE ONLY</span>
        </div>

      </div>
    </>
  );
}

export default ResultCard;