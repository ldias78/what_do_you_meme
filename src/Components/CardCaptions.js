import React, { useState, useEffect } from "react";
import randomphrases from "./randomphrases.json";

const Card = ({ quote, id }) => {
  return (
    <div key={id} className="card">
      <p>{quote}</p>
    </div>
  );
};

const CardDeck = () => {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const newDeck = [...randomphrases];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    setDeck(newDeck.slice(0, 100));
  }, []);

  return (
    <div className="card-deck">
      {deck.map((card) => (
        <Card key={card.id} quote={card.quote} id={card.id} />
      ))}
    </div>
  );
};

export default CardDeck;
