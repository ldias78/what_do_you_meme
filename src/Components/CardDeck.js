import React, { useState, useEffect } from "react";
import Randomphrases from "./Randomphrases.json";
import "./CardDeck.css";

const Card = ({ quote, id }) => {
  return (
    <div key={id} className="cards">
      <div className="card"></div>
      <p>{quote}</p>
    </div>
  );
};

const CardDeck = () => {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const newDeck = [...Randomphrases];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    setDeck(newDeck.slice(0, 100));
  }, []);

  return (
    <div className="cards">
      {deck.map((card) => (
        <Card key={card.id} quote={card.quote} />
      ))}
    </div>
  );
};

export default CardDeck;
