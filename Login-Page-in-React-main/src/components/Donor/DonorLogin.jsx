import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Donor/DonorLogin.css";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { loginDonor } from "../../api/userService";

export const DonorLogin = () => {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLoginClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const credentials = { email, password };
      const response = await loginDonor(credentials);
      console.log("Login response:", response);
      sessionStorage.setItem("userId", response.donorId);

      if (response.status === 200) {
        navigate("/amount");
      } else {
        setError("Unexpected response status");
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">donor Login</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleLoginClick}>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="email icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>

          <div className="input">
            <img src={password_icon} alt="password icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="submit-container">
          <button className="submit" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </form>
    </div>
  );
};
