import "./about.css";

function About() {

  return (

    <div className="about-page">


      <section className="about-hero">

        <div className="hero-badge">
          Machine Learning Healthcare Project
        </div>


        <h1>
          About Stroke Predictor AI
        </h1>


        <p>
          Stroke Predictor AI is a machine learning powered healthcare
          analytics platform designed to estimate stroke risk
          using patient health information.
        </p>

      </section>




      <section className="about-grid">


        <div className="about-card">

          <h2>
            Project Overview
          </h2>

          <p>
            This project applies supervised machine learning
            algorithms to analyze medical data and predict
            whether a patient may be at risk of stroke.
          </p>

          <p>
            Multiple classification models are evaluated to
            determine the model that provides the best balance
            between identifying stroke cases and reducing
            incorrect predictions.
          </p>

        </div>





        <div className="about-card">

          <h2>
            Dataset
          </h2>

          <p>
            The model uses a healthcare stroke dataset
            containing patient information such as:
          </p>


          <ul>

            <li>Age</li>
            <li>Gender</li>
            <li>Hypertension</li>
            <li>Heart disease</li>
            <li>BMI</li>
            <li>Glucose level</li>
            <li>Smoking status</li>

          </ul>


        </div>



      </section>





      <section className="tech-section">


        <h2>
          Technologies Used
        </h2>


        <div className="tech-grid">


          <div className="tech-card">
            Python
          </div>


          <div className="tech-card">
            Scikit-Learn
          </div>


          <div className="tech-card">
            Pandas
          </div>


          <div className="tech-card">
            Flask
          </div>


          <div className="tech-card">
            React
          </div>


          <div className="tech-card">
            Machine Learning
          </div>


        </div>


      </section>






      <section className="models-about">


        <h2>
          Machine Learning Models
        </h2>



        <div className="model-info">


          <div>
            <h3>
              Logistic Regression
            </h3>

            <p>
              Used as a strong baseline classification model
              and performed well in recall-based evaluation.
            </p>
          </div>



          <div>
            <h3>
              Decision Tree
            </h3>

            <p>
              Provides interpretable decision rules and
              allows easy understanding of predictions.
            </p>
          </div>




          <div>
            <h3>
              K-Nearest Neighbors
            </h3>

            <p>
              Predicts outcomes by comparing similarity
              between patients.
            </p>
          </div>


        </div>


      </section>



    </div>

  );

}


export default About;