import React, { useState} from "react";
import Randomphrases from "./Randomphrases.json";
import PlayerHand from "./PlayerHand.js";
import "./CardDeck.css";

const SelectedCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  setSelectedCard(quote) {
  }
    
    return (
      <div>
      <h2>Player 1</h2>
      {players[0].map((quote, index) => (
        <Card key={index} quote={quote.quote} handleCardClick={handleCardClick} />
      ))}
      <h2>Player 2</h2>
      {players[1].map((quote, index) => (
        <Card key={index} quote={quote.quote} handleCardClick={handleCardClick} />
      ))}
      <h2>Player 3</h2>
      {players[2].map((quote, index) => (
        <Card key={index} quote={quote.quote} handleCardClick={handleCardClick} />
      ))}
      <h2>Player 4</h2>
      {players[3].map((quote, index) => (
        <Card key={index} quote={quote.quote} handleCardClick={handleCardClick} />
      ))}
      {selectedCard ? <p>Selected card: {selectedCard.quote.quote}</p> : null}
    </div>
    
  )};

