function ResultCard({ result }) {


  const highRisk =
    result.final_prediction === 1;


  return (

    <div className="result">


      <h2>
        Assessment Result
      </h2>



      <div
        className={
          highRisk
          ? "risk-badge high"
          : "risk-badge low"
        }
      >

        {result.risk}

      </div>





      <div className="vote-section">


        <h3>
          Model Prediction
        </h3>



        <div className="vote-item">

          <span>
            Logistic Regression
          </span>


          <span>

          {
            result.final_prediction === 1
            ? "✓ Stroke Risk Detected"
            : "✓ No Stroke Risk"
          }

          </span>

        </div>



      </div>





      <div className="final-decision">


        <h3>
          Final Recommendation
        </h3>



        <p className="decision-text">

          {
            highRisk
            ? 
            "The model detected a higher probability of stroke risk. Medical consultation is recommended."
            :
            "The model detected a lower probability of stroke risk based on the provided information."
          }

        </p>


      </div>



    </div>

  );

}


export default ResultCard;