import React from "react";
import Randomphrases from "./Randomphrases.json";
import "./CardDeck.css";

const Card = ({ quote }) => (
  <div className="cards">
    <div className="card">
      <p>{quote}</p>
    </div>
  </div>
);

const PlayerHand = () => {
  let players = [[], [], [], []];
  let numberOfCards = 7;

  for (let i = 0; i < numberOfCards * 4; i++) {
    let currentPlayer = i % 4;
    players[currentPlayer].push(Randomphrases[i]);
  }
  console.log(players[0]);

  return (
    <div>
      <h2>Player 1</h2>
      {players[0].map((quote, index) => (
        <Card key={index} quote={quote.quote} />
      ))}

      <h2>Player 2</h2>
      {players[1].map((quote, index) => (
        <Card key={index} quote={quote.quote} />
      ))}
      <h2>Player 3</h2>
      {players[2].map((quote, index) => (
        <Card key={index} quote={quote.quote} />
      ))}
      <h2>Player 4</h2>
      {players[3].map((quote, index) => (
        <Card key={index} quote={quote.quote} />
      ))}
    </div>
  );
};

export default PlayerHand;
