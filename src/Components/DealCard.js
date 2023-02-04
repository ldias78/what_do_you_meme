import React, { useState } from "react";
import CardDeck from "./CardDeck";
import Button from "react-bootstrap/Button";

const DealCard = () => {
  const deckCount = 100;
  const [deck, setDeck] = useState(
    Array.from({ length: deckCount }, (_, i) => i + 1)
  );
  const [players, setPlayers] = useState([]);

  const dealCard = () => {
    if (deck.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(randomIndex, 1)[0];
    setPlayers([...players, card]);
  };

  return (
    <div>
      <Button variant="blue" onClick={dealCard}>
        Deal Card
      </Button>{" "}
      {/* <button>Deal Card</button> */}
    </div>
  );
};

export default DealCard;
