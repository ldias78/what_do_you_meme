import React, { useEffect, useState } from "react";
import Randomphrases from "./Randomphrases.json";
import "./CardDeck.css";
import { navigate } from "@reach/router";
import Card from "./Card";

const PlayCard = (props) => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const player = props.location.state.player;
  let players = [[], [], [], []];
  useEffect(() => {
    let numberOfCards = 7;
    const shuffledArray = Randomphrases.sort(() => 0.5 - Math.random());
    const chooenItems = shuffledArray.slice(0, numberOfCards);
    setCards(chooenItems);
  }, [player]);

  return (
    <div>
      <h2>{player}</h2>
      {cards.map((quote, index) => (
        <Card
          key={index}
          isSelected={quote.quote == selectedCard}
          quote={quote.quote}
          onClick={() => {
            const savedItemsStr = localStorage.getItem("FavoriteCards") ?? "{}";
            const savedItems = JSON.parse(savedItemsStr);
            savedItems[player] = quote;
            localStorage.setItem("FavoriteCards", JSON.stringify(savedItems));
            setSelectedCard(quote.quote);
          }}
        />
      ))}
      <div style={{ marginTop: 10 }}>
        {selectedCard && (
          <div>
            <p>You selected: {selectedCard}</p>
          </div>
        )}
      </div>

      <button onClick={() => navigate("/favoritecards")}>
        Go to All Favorite cards
      </button>

      {/* <h2>Player 2</h2>
      {players[1].map((quote, index) => (
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
      <h2>Player 3</h2>
      {players[2].map((quote, index) => (
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
      <h2>Player 4</h2>
      {players[3].map((quote, index) => (
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
      )} */}
    </div>
  );
};

export default PlayCard;
