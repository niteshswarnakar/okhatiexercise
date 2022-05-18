import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Loginpage.css";
import { Button, Checkbox, TextField } from "@material-ui/core";
import UserContext from "../context/context";

const Signup = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [enteredPassword1, setEnteredPassword1] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [isLoggedIn, refreshLogin] = useContext(UserContext);

  const pwd1 = useRef();

  useEffect(() => {
    setFormIsValid(emailIsValid && passwordIsValid);
  }, [emailIsValid, passwordIsValid, passwordMatch]);

  let navigate = useNavigate();
  const onRegister = (email, password) => {
    let valid = enteredPassword === pwd1.current.value;
    console.log("second ref password - ", pwd1.current.value);
    if (valid) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      // localStorage.setItem("isLoggedIn", "true");
      // refreshLogin(true);
      navigate("/login");
    } else {
      alert("password didn't match");
      setEnteredPassword("");
      setEnteredPassword1("");
      setPasswordIsValid(false);
    }
  };

  const emailChangeHandler = (e) => {
    console.log(e.target.value);
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
    // const specialChars = /[`!@#$%^&*()_+-={};:|,.<>/?~]/;
    const symbol = /[#@!$&?%*^_()<>`~]/;
    const len = password.trim().length >= 8;

    let valid =
      cap.test(password) &&
      symbol.test(password) &&
      small.test(password) &&
      numeric.test(password) &&
      len;
    console.log("password validity - ", valid);
    setPasswordIsValid(valid);
  };

  const passwordMatchHandler = (e) => {
    let password = e.target.value;

    setEnteredPassword1(password);

    console.log("enteredPassword === enteredPassword1 -");
    console.log({ enteredPassword, enteredPassword1 });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!passwordIsValid) {
      alert("password is not valid");
      setEnteredPassword("");
      setEnteredPassword1("");
    } else {
      onRegister(enteredEmail, enteredPassword);
    }
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form className="form-container" onSubmit={submitHandler}>
        <div className="input email">
          <label htmlFor="email">Email</label>
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
          <div className="checkbox">
            <TextField
              id="password"
              type={!showPassword ? "password" : "text"}
              name="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
            />
            <Checkbox
              id="showpassword"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
        </div>

        <div className="input password1">
          <label htmlFor="password1">Confirm Password</label>
          <div className="checkbox">
            <TextField
              id="password1"
              type={!showPassword1 ? "password" : "text"}
              name="password1"
              value={enteredPassword1}
              inputRef={pwd1}
              onChange={passwordMatchHandler}
            />
            <Checkbox
              id="showpassword"
              onClick={() => setShowPassword1((prev) => !prev)}
            />
          </div>
        </div>

        <Button variant="contained" type="submit" color="secondary">
          Signup
        </Button>
      </form>
    </div>
  );
};

export default Signup;
