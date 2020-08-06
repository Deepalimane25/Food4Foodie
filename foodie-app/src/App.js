import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Navbar from "./Component/Navbar/Navbar";
// import Homepage from "./Pages/Homepage/Homepage";
// import Card from "./Pages/Homepage/Card/Card";
import { FooterContainer } from './Container/Footer'
// import { FooterContainer1 } from './Container/Footer'
import { FooterContainer2 } from './Container/Footer'
// import ValidatedLogin from "./Component/Login/ValidatedLogin";
// import VerticalLinearStepper from "./Pages/CheckOut";
// import Quickview from "./Pages/QuickView";
// import "./Component/Login/Login.css";
// import Signin from "./Component/Login/Login";
import Signup from "./Component/SignUp/Signup"


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Homepage /> */}
      {/* <Card /> */}
      {/* <Signin/> */}
      <Signup/>
      <FooterContainer />
    <FooterContainer2 />
    {/* <ValidatedLogin/> */}
      {/* <Copyright/> */}
      {/* <VerticalLinearStepper /> */}
    </div>
  );
}

export default App;
