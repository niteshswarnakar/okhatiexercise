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
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // localStorage.getItem("isLoggedIn")

  let savedEmail = localStorage.getItem("email");
  let savedPassword = localStorage.getItem("password");

  const refreshLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <UserContext.Provider value={[isLoggedIn, refreshLogin, savedEmail]}>
        <Header />
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
