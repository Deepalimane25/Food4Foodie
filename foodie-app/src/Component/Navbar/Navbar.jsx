import React from "react";
import Style from "./Navbar.module.scss";
// import Footer from "../Footer";
import Logo from "../../Assets/Images/Logo.jpg"; 
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import LoginSignup from "../../Pages/Login"
function Navbar() {
  return (
    // <Router>
    <div className={Style.main_container}>
      <img src = {Logo} className={Style.logo} alt = {Logo}/>
      <h2 className={Style.logo1}>_FOOD 4 FOODIE_<h6 className={Style.tagline}>Faster than you can imagine</h6></h2>
      <ul className={Style.Navigation_list}>
        <li>
          <i className="fas fa-house-user">&nbsp;Home</i>
        </li>
        <li>
        {/* <Link to={'../../Pages/SignIn.js'} className="nav-link"> SignIn </Link> */}
        <i className="fas fa-user-lock">&nbsp;SignIn</i>

        </li>

        <li>
          {" "}
          <i className="fas fa-cart-plus">&nbsp;Cart</i>
        </li>
      </ul>
      {/* <Switch>
              <Route exact path='../../Pages/SignIn.js' component={LoginSignup} />
      </Switch> */}
    </div>
    // </Router>
  );
}

export default Navbar;
