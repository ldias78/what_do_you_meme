import React from "react";
import SelectedCard from "./SelectedCard";
const SelectedCards = ({ selectedCards, onVote, onBackToBoard }) => (
  <div>
    {selectedCards.map((quote, index) => (
      <SelectedCard key={index} quote={quote} onClick={() => onVote(quote)} />
    ))}
    <button onClick={onBackToBoard}>Back to Board</button>
  </div>
);
export default SelectedCards;
