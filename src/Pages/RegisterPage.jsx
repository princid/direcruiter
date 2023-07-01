import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/RegisterPage.css";

const RegisterPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <h2>Company Registration</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
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
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/LoginPage">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
