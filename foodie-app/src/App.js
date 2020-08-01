import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import Card from "./Pages/Homepage/Card/Card";
import { FooterContainer } from './Container/Footer'
// import { FooterContainer1 } from './Container/Footer'
import { FooterContainer2 } from './Container/Footer'
import LoginSignup from "./Pages/Login";
// import VerticalLinearStepper from "./Pages/CheckOut";
// import Quickview from "./Pages/QuickView";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Card />
      <FooterContainer />
    <FooterContainer2 />
    <LoginSignup/>
      {/* <Copyright/> */}
      {/* <VerticalLinearStepper /> */}
    </div>
  );
}

export default App;
