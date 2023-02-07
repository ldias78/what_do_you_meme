import React, { useState } from "react";
import CardDeck from "./CardDeck";

const ShuffleDeck = () => {
  const [shuffleDeck, setshuffleDeck] = useState(CardDeck);

  setshuffleDeck(
    shuffleDeck
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1])
  );
  console.log(setshuffleDeck);

  return (
    <div className="cards">
      <div className="card"></div>
      <p>
        <CardDeck deck={shuffleDeck} />
      </p>
    </div>
  );
};

export default ShuffleDeck;
