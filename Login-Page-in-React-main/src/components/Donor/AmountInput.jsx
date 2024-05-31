import React, { useState } from "react";
import "./DonorLogin.css";
import { Popup } from "./popup.jsx";

export const AmountInput = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [amount, setAmount] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [submittedAmount, setSubmittedAmount] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedAmount(amount);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSubmittedAmount(null);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Select Welfare Type</div>
        <div className="underline1"></div>
      </div>

      <div className="options">
        <div className="option">
          <input
            type="radio"
            id="child-welfare"
            name="welfare-type"
            value="child"
            checked={selectedOption === "child"}
            onChange={handleOptionChange}
          />
          <label htmlFor="child-welfare">Child Welfare</label>
        </div>

        <div className="option">
          <input
            type="radio"
            id="women-welfare"
            name="welfare-type"
            value="women"
            checked={selectedOption === "women"}
            onChange={handleOptionChange}
          />
          <label htmlFor="women-welfare">Women Welfare</label>
        </div>

        <div className="option">
          <input
            type="radio"
            id="education-welfare"
            name="welfare-type"
            value="education"
            checked={selectedOption === "education"}
            onChange={handleOptionChange}
          />
          <label htmlFor="education-welfare">Education Welfare</label>
        </div>
      </div>

      {selectedOption && (
        <div className="amount-input">
          <div className="inputs">
            <div className="input">
              <input
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="Enter Amount"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
          </div>

          <div className="submit-container">
            <div className="submit" onClick={handleSubmit}>
              Submit
            </div>
          </div>
        </div>
      )}

      {showPopup && (
        <Popup handleClose={handleClosePopup} amount={submittedAmount} />
      )}
    </div>
  );
};
