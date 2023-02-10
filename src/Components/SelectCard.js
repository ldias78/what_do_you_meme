// SelectedCards.js
import React from "react";
import SelectedCard from "./SelectedCard";

const SelectedCard = ({ quote, onClick }) => (
  <div className="selected-card">
    <p>{quote.quote}</p>
    <button onClick={onClick}>Vote</button>
  </div>
);
export default SelectedCard;
