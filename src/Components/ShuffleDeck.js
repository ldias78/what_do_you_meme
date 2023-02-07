import React, { useState } from "react";
import CardDeck from "./CardDeck";

const ShuffleDeck = () => {
  const [deck, setDeck] = useState(CardDeck);

  setDeck(
    deck
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1])
  );
  return (
    <div className="cards">
      <div className="card"></div>
      <p>
        <CardDeck />
      </p>
    </div>
  );
};

export default ShuffleDeck;
