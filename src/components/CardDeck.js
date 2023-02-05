import React, { useState } from "react";
import Card from "./CardCaptions";
import CardCaptions from "./CardsCaptions";

const CardDeck = () => {
  const [deck, setDeck] = useState(CardCaptions);
  const [players, setPlayers] = useState([]);

  const shuffleDeck = () => {
    setDeck(
      deck
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])
    );
  };

  const dealCards = () => {
    if (deck.length === 0) {
      return;
    }

    const newPlayer = [];
    for (let i = 0; i < 7; i++) {
      newPlayer.push(deck.pop());
    }

    setPlayers([...players, newPlayer]);
  };

  return (
    <div className="carddeck">
      <div className="deck">
        {deck.map((card, index) => (
          <Card key={index} caption={card} />
        ))}
      </div>
      <div className="players">
        {players.map((hand, index) => (
          <div key={index} className="player-hand">
            {hand.map((card, index) => (
              <Card key={index} caption={card} />
            ))}
          </div>
        ))}
      </div>
      <button className="shuffle" onClick={shuffleDeck}>
        Shuffle Deck
      </button>
      <button className="deal" onClick={dealCards}>
        Deal 7 Cards
      </button>
    </div>
  );
};

export default CardDeck;
