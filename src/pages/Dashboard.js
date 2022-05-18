import React, { useContext } from "react";
import UserContext from "../context/context";
import "./Home.css";
function Dashboard() {
  let [isLoggedIn, refreshLogin, savedEmail] = useContext(UserContext);

  return (
    <div className="container">
      <section className="hero-section">
        <div className="section-left">
          <div className="section-intro">
            <p className="section-title">Hello, {savedEmail}</p>
            <h2 className="section-main">You're welcome</h2>
            <p className="section-secondary">
              We care for <span className="section-skill">Your privacy</span>
            </p>
          </div>
          <div className="section-button">
            <span className="b1">Authen</span>
            <span className="b2">tication</span>
          </div>
        </div>
        <div className="section-right">
          <img
            src="https://imgs.search.brave.com/l5gZZmweE_gWtEVeEErINfAKuBKx8GRJq95Njhu04tw/rs:fit:600:450:1/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvb2ZmaWNl/LWVtcGxveWVlcy13/b3JraW5nLXRvZ2V0/aGVyLWZvci1uZXct/aWRlYS0yNzM5MTkw/LTIyNzc1MDAucG5n"
            alt="illustration"
          />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
