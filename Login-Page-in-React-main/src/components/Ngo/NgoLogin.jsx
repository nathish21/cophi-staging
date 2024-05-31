import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Donor/DonorLogin.css"
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { loginUser } from "../../api/userService";

export const NgoLogin = () => {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleLoginClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const credentials = { email, password };
      const data = await loginUser(credentials);
      // setToken(data.token);
      console.log("Login successful:", data);

     navigate("/add-welfare");
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
    // Navigate to the add welfare details page
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">NGO Login</div>
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
          <div className="submit" onClick={handleLoginClick} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </form>
    </div>
  );
};
