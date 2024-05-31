import React from "react";
import { useNavigate } from "react-router-dom";
import "./DonorLogin.css";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

export const DonorLogin = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the amount input page
    navigate("/amount");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Donor Login</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="email icon" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={handleLoginClick}>
          Login
        </div>
      </div>
    </div>
  );
};
