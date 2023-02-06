import React, { useState } from "react";
import CardCaptions from "./CardCaptions";

const ShuffleDeck = () => {
  const [deck, setDeck] = useState(CardCaptions);

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
        <CardCaptions />
      </p>
    </div>
  );
};

export default ShuffleDeck;
