import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
// import "./BoardGame.css";
import { navigate } from "@reach/router";
import "./FavoriteCards.css";

const stringSort = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};
const FavoriteCards = ({ giphy }) => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const savedItemsStr = localStorage.getItem("FavoriteCards") ?? "{}";
    const savedItems = JSON.parse(savedItemsStr);
    const cards = savedItems[`R${Object.keys(savedItems).length - 1}`];

    setFavoriteCards(
      Object.entries(cards).sort((a, b) => stringSort(a[0], b[0]))
    );
    console.log(
      "Object.entries(cards).sort((a, b) => stringSort(a[0], b[0]))",
      Object.entries(cards).sort((a, b) => stringSort(a[0], b[0]))
    );
  }, []);

  const FavoiteCard = ({ quote, player, count }) => {
    return (
      <div
        className="card-favorite"
        style={{
          fontFamily: "Comic Sans MS, sans-serif",
          fontSize: 12,
          width: "400px",
          height: "250px",
          marginTop: "1rem",
          background: "rgb(160, 67, 67)",
          borderRadius: "2rem",
          padding: "4rem",
          boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.75)",
          transition: "0.2s",
          wordWrap: "break-word",
        }}
      >
        <h3 style={{ textAlign: "center", color: "coral" }}>{player}</h3>
        <p style={{ marginTop: "1rem", color: "green" }}>{quote}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          <Button
            variant="secondary"
            className="see-card-btn "
            style={{ backgroundColor: "coral" }}
            onClick={() => {
              const savedItemsStr =
                localStorage.getItem("FavoriteCards") ?? "{}";
              const savedItems = JSON.parse(savedItemsStr);
              if (
                savedItems[`R${Object.keys(savedItems).length - 1}`][player]
                  ?.count === undefined
              ) {
                savedItems[`R${Object.keys(savedItems).length - 1}`][
                  player
                ].count = 1;
              } else {
                savedItems[`R${Object.keys(savedItems).length - 1}`][player]
                  .count++;
              }
              localStorage.setItem("FavoriteCards", JSON.stringify(savedItems));
              setFavoriteCards(
                Object.entries(
                  savedItems[`R${Object.keys(savedItems).length - 1}`]
                ).sort((a, b) => stringSort(a[0], b[0]))
              );
            }}
          >
            Vote
          </Button>
          {count && (
            <div
              style={{
                color: "black",
                marginLeft: 10,
                backgroundColor: "pink",
                padding: 5,
              }}
            >
              {count}
            </div>
          )}
        </div>
      </div>
    );
  };
  return (
    <div>
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <div>
        <h1 className="title">
          <p
            style={{
              marginBottom: 50,
              color: "green",
              fontFamily: "Comic Sans MS, sans-serif",
            }}
          >
            All Favorite Cards
          </p>
        </h1>
      </div>
      <div className="cards-container">
        {/* PLAYER CARD 1 AND 2 */}
        <div>
          {favoriteCards.slice(0, 2).map((card, index) => (
            <div style={{ margin: "100px", maxWidth: "400px" }} key={index}>
              <FavoiteCard
                isSelected={false}
                player={card[0]}
                quote={card[1].quote}
                count={card[1].count}
                onClick={() => {}}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Card.Img
              variant="top"
              src={giphy}
              style={{
                marginTop: "30px",
                height: "400px",
                width: "400px",
              }}
            />
            <button
              style={{
                marginTop: 30,
                backgroundColor: "green",
                transition: "all 0.5s ease",
                padding: 15,
                fontSize: 18,
                borderRadius: 5,
              }}
              variant="secondary"
              className="see-card-btn "
              onClick={() => {
                const savedItemsStr =
                  localStorage.getItem("FavoriteCards") ?? "{}";
                const savedItems = JSON.parse(savedItemsStr);
                savedItems[`R${Object.keys(savedItems).length}`] = {};
                localStorage.setItem(
                  "FavoriteCards",
                  JSON.stringify(savedItems)
                );
                navigate("/boardgame");
              }}
            >
              PLAY AGAIN
            </button>
            <button
              style={{
                marginTop: 30,
                backgroundColor: "brown",
                transition: "all 0.5s ease",
                padding: 15,
                fontSize: 18,
                borderRadius: 5,
              }}
              variant="secondary"
              className="see-card-btn "
              onClick={() => {
                navigate("/voteboard");
              }}
            >
              Game Over
            </button>
          </div>
        </div>
        {/* PLAYER CARD 3 AND 4 */}
        <div>
          {favoriteCards.slice(2, 4).map((card, index) => (
            <div style={{ margin: "100px", maxWidth: "500px" }} key={index}>
              <FavoiteCard
                isSelected={false}
                player={card[0]}
                quote={card[1].quote}
                count={card[1].count}
                onClick={() => {}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteCards;
