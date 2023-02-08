import React, { useState, useEffect } from "react";
import Randomphrases from "./Randomphrases.json";
// import "./CardDeck.css";

// const quotes = randomphrasesArray.map((obj) => obj["quote"]);
const randomphrasesArray = Object.values(Randomphrases.Randomphrases);

const Card = ({ quotes, id }) => {
  return (
    <div key={id} className="cards">
      <div className="card">
        <p>{quotes.quote}</p>
      </div>
    </div>
  );
};

const CardDeck = () => {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const newDeck = [...randomphrasesArray];
    setDeck(newDeck);
  }, []);

  return (
    <div className="cards">
      {deck.map((card) => (
        <Card key={card.id} quotes={card} />
      ))}
    </div>
  );
};

export default CardDeck;
