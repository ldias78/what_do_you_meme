import React, { useState, useEffect } from "react";
import CardDeck from "./CardDeck";

const ShuffleDeck = () => {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    setDeck(
      Array(100)
        .fill(<CardDeck />)
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])
    );
  }, []);

  return (
    <div className="cards">
      {deck.map((card, index) => (
        <div key={index} className="card">
          {card}
        </div>
      ))}
    </div>
  );
};

export default ShuffleDeck;
