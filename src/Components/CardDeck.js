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
     <div class-"cards"›
      <div class="card"›k/div>
      <div class="card"#/div>
      <div class-"card"›</div>
      <div class="card"›</div>
      <div class-"card"›</div>
</div>
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
  );
};

export default CardDeck;



const Card = ({ content, answer, id }) => (
  <div className={`card ${answer ? "card--answer" : ""} ${id ? `card--${id}` : ""}`}>
    <div className="card__content">{content}</div>
    <footer className="card__footer">
      {answer ? (
        <img src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Small.png" />
      ) : (
        <img src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-White-Small.png" />
      )}
      <span>What Do You Meme</span>
      <sub>vol. 2</sub>
    </footer>
  </div>
);

const Scene = () => (
  <div className="scene">
    <input type="radio" name="choice" id="javascript" defaultChecked />
    <input type="radio" name="choice" id="typescript" />
    <label htmlFor="typescript" />
    <label htmlFor="javascript" />
    <Card content="Use _______ instead of _______." />
    <Card content="JavaScript" answer={true} id="javascript" />
    <Card content="TypeScript" answer={true} id="typescript" />
  </div>
);

export default Scene;