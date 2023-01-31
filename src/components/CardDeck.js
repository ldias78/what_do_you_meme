import React from "react";
import Card from "./Card";
import CardCaptions from "./CardsCaptions";
import { useState } from "react";

const CardDeck = () => {
  const [totaldeck, setTotaldeck] = React.useState(100);

  const shuffledeck = () => {
    setTotaldeck((prevTotal) => totaldeck - 7);
    console.log("hi from deck");
  };

  return (
    <div className="carddeck">
      <Card />
      <span className="deck">totaldeck</span>
      <button className="shuffle" onClick={() => shuffledeck()}>
        Shuffle Button
      </button>
    </div>
  );
};

export default CardDeck;
