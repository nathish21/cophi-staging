import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; // Importing the close icon from react-icons
import "./TransactionDetails.css";

export const TransactionDetails = () => {
  const transactions = [
    { name: "Nathish", amount: 1000 },
    { name: "Nathish", amount: 1000 },
    { name: "Nathish", amount: 1000 },
    { name: "Nathish", amount: 1000 },
    { name: "Nathish", amount: 1000 },
    { name: "Nathish", amount: 1000 },
    { name: "Nathish", amount: 1000 },
    { name: "Nathish", amount: 1000 },
  ];

  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/add-welfare");
  };

  return (
    <div className="transaction-container">
      <div className="header">
        <div className="close-icon" onClick={handleClose}>
          <FaTimes />
        </div>
        <div className="text">Transaction Details</div>
        <div className="underline"></div>
      </div>
      <div className="transaction-cards-container">
        <div className="transaction-cards">
          {transactions.map((transaction, index) => (
            <div key={index} className="transaction-card">
              <h4>{transaction.name}</h4>
              <p>Rupees {transaction.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
