import React, { useState, useEffect, useContext } from "react";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";

import UserContext from "../context/context";
import { Button, TextField } from "@material-ui/core";

const LoginPage = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [isLoggedIn, refreshLogin, savedEmail, showAlert] =
    useContext(UserContext);

  useEffect(() => {
    setFormIsValid(emailIsValid && passwordIsValid);
  }, [enteredEmail, enteredPassword, emailIsValid, passwordIsValid]);

  let navigate = useNavigate();
  const onLogin = (email, password) => {
    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");
    if (savedEmail === email && savedPassword === password) {
      refreshLogin(true);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
      showAlert("Successfully logged in", "success");
    } else {
      showAlert("Account didn't match", "error");
      setEnteredPassword("");
    }
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);

    let valid = e.target.value.includes("@") && e.target.value.includes(".");
    setEmailIsValid(valid);
  };

  const passwordChangeHandler = (e) => {
    let password = e.target.value;
    setEnteredPassword(password);
    const cap = /[A-Z]/;
    const small = /[a-z]/;
    const numeric = /[0-9]/;
    const len = password.trim().length >= 8;

    let valid =
      cap.test(password) &&
      small.test(password) &&
      numeric.test(password) &&
      len;
    console.log("validity - ", valid);
    setPasswordIsValid(valid);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(enteredEmail, enteredPassword);
  };

  return (
    <div className="login-form">
      <div className="login-title">
        <h2>Login</h2>
      </div>
      <form className="form-container" onSubmit={submitHandler}>
        <div className="input email">
          <label className="email-label" htmlFor="email">
            Email
          </label>
          <TextField
            id="email"
            type="email"
            name="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>

        <div className="input password">
          <label htmlFor="password">Password</label>
          <TextField
            id="password"
            type="password"
            name="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <Button variant="contained" color="secondary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
