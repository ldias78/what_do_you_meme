import React, { useEffect, useState } from "react";
import Randomphrases from "./Randomphrases.json";
import "./CardDeck.css";
import { navigate } from "@reach/router";
import Card from "./Card";

const PlayCard = (props) => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  console.log("player33", props);
  const player = props.location.state.player;
  console.log("player44", player);
  // let players = [[], [], [], []];
  useEffect(() => {
    let numberOfCards = 7;
    const shuffledArray = Randomphrases.sort(() => 0.5 - Math.random());
    const chooenItems = shuffledArray.slice(0, numberOfCards);
    setCards(chooenItems);
  }, [player]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1
        style={{
          marginBottom: 100,
          marginTop: 100,
          color: "green",
          fontFamily: "Comic Sans MS, sans-serif",
        }}
      >
        {player}
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cards.map((quote, index) => (
          <Card
            key={index}
            isSelected={quote.quote === selectedCard}
            quote={quote.quote}
            onClick={() => {
              const savedItemsStr =
                localStorage.getItem("FavoriteCards") ?? "{}";
              const savedItems = JSON.parse(savedItemsStr);
              savedItems[player] = quote;
              localStorage.setItem("FavoriteCards", JSON.stringify(savedItems));
              setSelectedCard(quote.quote);
            }}
          />
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        {selectedCard && (
          <div>
            <h3>
              <p
                style={{
                  marginBottom: 50,

                  color: "green",
                  fontFamily: "Comic Sans MS, sans-serif",
                }}
              >
                You selected: {selectedCard}
              </p>
            </h3>
          </div>
        )}
      </div>
      <button
        style={{
          marginTop: 20,
          backgroundColor: "green",
          transition: "all 0.5s ease",
          padding: 15,
          fontSize: 18,
          borderRadius: 5,
        }}
        onClick={() => navigate("/favoritecards")}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "coral";
          e.currentTarget.style.transform = "scale(1.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "green";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        Go to All Favorite cards
      </button>
    </div>
  );
};

export default PlayCard;
