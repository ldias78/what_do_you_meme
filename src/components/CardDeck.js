import React, { useState } from "react";
import Card from "..Card";

const CardDeck = () => {
  const deckCount = 100;
  const [deck, setDeck] = useState(
    Array.from({ length: deckCount }, (_, i) => i + 1)
  );
  const [players, setPlayers] = useState([]);

  const dealCards = () => {
    if (deck.length === 0) {
      return;
    }

    const newPlayer = [];
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      const card = deck.splice(randomIndex, 1)[0];
      newPlayer.push(card);
    }

    setPlayers([...players, newPlayer]);
  };

  return (
    <div className="carddeck">
      <div className="players">
        {players.map((hand, index) => (
          <div key={index} className="player-hand">
            {hand.map((card, index) => (
              <Card key={index} number={card} />
            ))}
          </div>
        ))}
      </div>
      <button className="deal" onClick={dealCards}>
        Deal 7 Cards
      </button>
    </div>
  );
};

export default CardDeck;
