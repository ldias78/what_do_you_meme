import React, { useState } from "react";
import Randomphrases from "./Randomphrases.json";
import "./CardDeck.css";

const Card = ({ quote, onClick }) => (
  <div className="cards" onClick={onClick}>
    <div className="card">
      <p>{quote}</p>
    </div>
  </div>
);

const Player = ({ player, selectedCard, setSelectedCard }) => {
  return (
    <div>
      <h2>{player.name}</h2>
      {player.cards.map((quote, index) => (
        <Card
          key={index}
          quote={quote.quote}
          onClick={() => setSelectedCard(quote.quote)}
        />
      ))}
      {selectedCard && (
        <div>
          <p>You selected: {selectedCard}</p>
        </div>
      )}
    </div>
  );
};

const PlayCard = () => {
  const players = [
    { name: "Player 1", cards: [] },
    { name: "Player 2", cards: [] },
    { name: "Player 3", cards: [] },
    { name: "Player 4", cards: [] },
  ];
  const numberOfCards = 7;

  for (let i = 0; i < numberOfCards * 4; i++) {
    let currentPlayer = i % 4;
    players[currentPlayer].cards.push(Randomphrases[i]);
  }

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div>
      {players.map((player) => (
        <Player
          key={player.name}
          player={player}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      ))}
    </div>
  );
};

export default PlayCard;
