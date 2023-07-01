import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2>Company Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          New to our recruitment solution? <Link to="/RegisterPage">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
