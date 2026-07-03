import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(){

return (

<nav className="navbar">

<div className="logo">
Stroke Predictor AI
</div>


<div className="nav-links">

<Link to="/">
Home
</Link>

<Link to="/predict">
Prediction
</Link>

<Link to="/analysis">
Analytics
</Link>

<Link to="/about">
About
</Link>

</div>


</nav>

)

}

export default Navbar;