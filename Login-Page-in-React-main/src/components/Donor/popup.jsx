import React from "react";
import "./DonorLogin.css";

export const Popup = ({ handleClose, amount }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span role="img" aria-label="Thanks">
          🎉 Thanks for contributing {amount ? `₹${amount}` : ""}! 🎉
        </span>
        <button className="close-btn" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};
