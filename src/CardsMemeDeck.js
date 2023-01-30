import React from "react";
import Card from "src/Card.js";

const CardDeck = () => {
  const [totaldeck, setTotaldeck] = React.useState(25);

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
