import React from "react";
import Randomphrases from "./Randomphrases.json";
import "./CardDeck.css";

const SelectedCard = ({ quote, onClick }) => (
  <div className="selected-card">
    <p>{quote.quote}</p>
    <button onClick={onClick}>Vote</button>
  </div>
);

export default SelectedCard;
