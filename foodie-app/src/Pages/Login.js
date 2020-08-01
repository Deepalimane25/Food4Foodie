import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import Logo from "../Assets/Images/Logo1.jpg"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login" >
      <form onSubmit={handleSubmit}>
      <img src = {Logo} className ="Logo" alt = {Logo}/>
      <h3>Login</h3>
      <h6>or create an account</h6>
      <br></br>
        <FormGroup controlId="tel" bsSize="large">
          <FormLabel>Phone Number</FormLabel>
          <FormControl
            autoFocus
            type="tel"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        {/* <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup> */}
        <Button block bsSize="large" abled={!validateForm()} type="submit">
          LOGIN
        </Button>
      </form>
    </div>
  );
}

