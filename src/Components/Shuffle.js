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
};

export default ShuffleDeck;
