import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
// import Button from "./Button";
import { Button } from "@material-ui/core";
import UserContext from "../context/context";

function Header() {
  const [isLoggedIn, refreshLogin] = useContext(UserContext);

  const onLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    refreshLogin(false);
  };

  return (
    <div className="header">
      <div className="header__left">
        <p className="portfo">
          okhati<span className="test"> test.</span>
        </p>
      </div>
      <div className="header__nav">
        <Link className="nav__link n1" to="/">
          Home
        </Link>
        <Link className="nav__link n2" to="/dashboard">
          Dashboard
        </Link>
        {!isLoggedIn ? (
          <Link style={{ textDecoration: "none" }} className="n2" to="/login">
            <Button variant="contained" color="secondary">
              Login
            </Button>
          </Link>
        ) : (
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary" onClick={onLogout}>
              Logout
            </Button>
          </Link>
        )}
        {!isLoggedIn ? (
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="primary">
              Sign up
            </Button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
