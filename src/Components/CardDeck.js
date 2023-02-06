import React, { useState, useEffect } from "react";
import Randomphrases from "./Randomphrases.json";
import "./CardDeck.css";

const randomphrasesArray = Object.values(Randomphrases);

const Card = ({ quote, id }) => {
  return (
    <div key={id} className="cards">
      <div className="card">{/* <h2>{quote}</h2> */}</div>
    </div>
  );
};

const CardDeck = () => {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const newDeck = [...randomphrasesArray];
    console.log(newDeck);
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // console.log(newDeck[i]);
      // console.log(newDeck[j]);
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    setDeck(newDeck);
    console.log("this checks the deck var", deck);
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
