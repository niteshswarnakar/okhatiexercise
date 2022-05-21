import React, { useState } from "react";
import "./App.css";
import UserContext from "./context/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MyButton from "./pages/MyButton";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AlertComponent from "./components/AlertComponent";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // localStorage.getItem("isLoggedIn")

  let savedEmail = localStorage.getItem("email");
  let savedPassword = localStorage.getItem("password");
  let [alert, setAlert] = useState();

  const refreshLogin = (status) => {
    setIsLoggedIn(status);
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 2000);
  };

  return (
    <Router>
      <UserContext.Provider
        value={[isLoggedIn, refreshLogin, savedEmail, showAlert]}
      >
        <Header />
        <AlertComponent alert={alert} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test" element={<MyButton />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
