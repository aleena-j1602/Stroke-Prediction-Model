import "./analysis.css";
import metrics from "../data/metrics.js";

function Analysis(){

return(

<div className="analysis-page">


<div className="analysis-header">

<h1>
Model Analytics
</h1>

<p>
Evaluation of machine learning models used
for stroke prediction.
</p>

</div>



<div className="metric-grid">


<div className="metric-card">

<h2>3</h2>

<p>
Models Tested
</p>

</div>


<div className="metric-card">

<h2>
82%
</h2>

<p>
Best Recall
</p>

</div>



<div className="metric-card">

<h2>
0.2108
</h2>

<p>
Best F1 Score
</p>

</div>


</div>


<h2>
Model Performance Comparison
</h2>


<img
className="graph"
src="/model_comparison.png"
alt="Model comparison"
/>

<h2>
Best K value for KNN
</h2>


<img
className="graph"
src="/best_k.png"
alt="Best K"
/>

<h2>
Confusion Matrices
</h2>


<div className="confusion">


<div>

<h3>
Logistic Regression
</h3>

<img
className="graph"
src="/lr_confusion.png"
/>

</div>



<div>

<h3>
Decision Tree
</h3>

<img
className="graph"
src="/dt_confusion.png"
/>

</div>



<div>

<h3>
KNN
</h3>

<img
className="graph"
src="/knn_confusion.png"
/>

</div>


</div>



<h2>
Metrics Table
</h2>


<table>


<thead>

<tr>

<th>
Model
</th>

<th>
Accuracy
</th>


<th>
Precision
</th>

<th>
Recall
</th>

<th>
F1
</th>

</tr>

</thead>



<tbody>


{
metrics.map(m=>(

<tr key={m.model}>

<td>{m.model}</td>

<td>
{(m.accuracy*100).toFixed(2)}%
</td>

<td>
{(m.precision*100).toFixed(2)}%
</td>

<td>
{(m.recall*100).toFixed(2)}%
</td>

<td>
{m.f1.toFixed(2)}
</td>


</tr>

))

}


</tbody>


</table>

<div className="recommendation-card">


<h2>
Model Recommendation
</h2>



<p>

When dealing with an imbalanced dataset like stroke prediction,
where the positive class (stroke) is rare, metrics like Recall
and F1 Score are often more important than overall Accuracy.
A high Recall indicates that the model is good at identifying
actual stroke cases, minimizing false negatives (missed strokes).

</p>



<p>

Looking at the evaluation results:

<br/><br/>

<strong>
Logistic Regression 
</strong>
achieved the highest Recall (0.82) and F1 Score (0.2108),
meaning it was the best at identifying actual stroke cases
(41 out of 50) and offered the best balance between precision
and recall. Logistic Regression caught 41 out of 50 actual
stroke cases (82.0%), and missed 9.

</p>




<p>

<strong>
Decision Tree 
</strong>
also performed reasonably in terms of recall but had a slightly
lower F1 Score. Decision Tree caught 33 out of 50 actual stroke
cases (66%), and missed 17.

</p>




<p>

<strong>
KNN (K=8) 
</strong>
performed poorly, failing to identify any stroke cases,
as indicated by its 0.0 Recall and F1 Score. KNN caught
0 out of 50 actual stroke cases (0.0%), and missed 50.

</p>

<p>
Since Logistic Regression demonstrated the best performance 
in terms of Recall and F1 Score, it is recommended as the 
preferred model for stroke prediction in this application.

</p>


</div>

</div>

)

}


export default Analysis;