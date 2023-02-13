import React, { useEffect, useState } from "react";
import Randomphrases from "./Randomphrases.json";
import "./Playcard.css";
import { navigate } from "@reach/router";
import Card from "./Card";
import { NUMBER_OF_CARDS } from "../constant";

const PlayCard = (props) => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const player = props.location.state.player;

  useEffect(() => {
    const shuffledArray = Randomphrases.sort(() => 0.5 - Math.random());
    const chooenItems = shuffledArray.slice(0, NUMBER_OF_CARDS);
    setCards(chooenItems);
  }, [player]);

  const isLastPlayer = player.startsWith("Player 4:");

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1
        style={{
          marginBottom: 50,
          marginTop: 100,
          color: "green",
          fontFamily: "Comic Sans MS, sans-serif",
        }}
      >
        {player}
      </h1>

      <button
        style={{
          marginBottom: 50,
          backgroundColor: "green",
          transition: "all 0.5s ease",
          padding: 15,
          fontSize: 18,
          borderRadius: 5,
        }}
        onClick={() => {
          // if (isLastPlayer) {
          //   navigate("favoritecards");
          // } else {
          //   window.history.back();
          // }
          navigate("boardgame");
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "coral";
          e.currentTarget.style.transform = "scale(1.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "green";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        Back to meme
      </button>

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
              if (!Object.keys(savedItems).length) {
                savedItems["R0"] = {};
                savedItems["R0"][player] = quote;
              } else {
                savedItems[`R${Object.keys(savedItems).length - 1}`][player] =
                  quote;
              }
              setSelectedCard(quote.quote);
              localStorage.setItem("FavoriteCards", JSON.stringify(savedItems));
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
    </div>
  );
};

export default PlayCard;
