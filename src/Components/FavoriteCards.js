import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import "./BoardGame.css";
import { navigate } from "@reach/router";
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
    setFavoriteCards(
      Object.entries(savedItems).sort((a, b) => stringSort(a[0], b[0]))
    );
  }, []);
  const FavoiteCard = ({ quote, player, count }) => {
    return (
      <div className="card-favorite">
        <h4>{player}</h4>
        <p>{quote}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="secondary"
            className="see-card-btn "
            onClick={() => {
              const savedItemsStr =
                localStorage.getItem("FavoriteCards") ?? "{}";
              const savedItems = JSON.parse(savedItemsStr);
              if (savedItems[player].count === undefined) {
                savedItems[player].count = 1;
              } else {
                savedItems[player].count++;
              }
              localStorage.setItem("FavoriteCards", JSON.stringify(savedItems));
              setFavoriteCards(
                Object.entries(savedItems).sort((a, b) =>
                  stringSort(a[0], b[0])
                )
              );
            }}
          >
            Score
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
      <div>
        <h1 className="title">All Favorite Cards</h1>
      </div>
      <div className="cards-container">
        <div>
          {favoriteCards.slice(0, 2).map((card, index) => (
            <FavoiteCard
              key={index}
              isSelected={false}
              player={card[0]}
              quote={card[1].quote}
              count={card[1].count}
              onClick={() => {}}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
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
              navigate("/boardgame");
            }}
          >
            PLAY AGAIN
          </Button>
          <Button
            variant="secondary"
            className="see-card-btn "
            onClick={() => {
              // navigate("/voteboard", { state: { selectedMeme, players } });
              navigate("/voteboard");
            }}
          >
            VoteBoard
          </Button>
          <Card.Img
            variant="top"
            src={giphy}
            style={{
              marginTop: "100px",
              height: "550px",
              width: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
        <div>
          {favoriteCards.slice(2, 4).map((card, index) => (
            <FavoiteCard
              key={index}
              isSelected={false}
              player={card[0]}
              quote={card[1].quote}
              count={card[1].count}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FavoriteCards;
