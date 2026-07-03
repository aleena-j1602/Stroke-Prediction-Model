import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Analysis from "./pages/Analysis";
import About from "./pages/About";

import "./App.css";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route 
          path="/predict" 
          element={<Predict />} 
        />

        <Route 
          path="/analysis" 
          element={<Analysis />} 
        />

        <Route 
          path="/about" 
          element={<About />} 
        />

      </Routes>

    </BrowserRouter>

  )

}


export default App