import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DonorLogin } from "./components/DonorLogin/DonorLogin";
import { AmountInput } from "./components/DonorLogin/AmountInput";
import { NgoLogin } from "./components/DonorLogin/NgoLogin";
import { AddWelfare } from "./components/DonorLogin/AddWelfare";
import { TransactionDetails } from "./components/DonorLogin/TransactionDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DonorLogin />} />
        <Route path="/amount" element={<AmountInput />} />
        <Route path="/ngo" element={<NgoLogin />} />
        <Route path="/add-welfare" element={<AddWelfare />} />
        <Route path="/transactions" element={<TransactionDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
