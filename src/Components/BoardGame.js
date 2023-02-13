import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./BoardGame.css";
import { navigate } from "@reach/router";

const BoardGame = (props) => {
  const { setFetching, fetching, giphy, location } = props;
  const [favoriteCards, setFavoriteCards] = useState([]);
  // const players = location?.state?.players ?? [];
  const [isVoteBtnDisabled, setIsVoteBtnDisabled] = useState(true);
  const playersStr = localStorage.getItem("players");
  const players = JSON.parse(playersStr);

  useEffect(() => {
    const savedItemsStr = localStorage.getItem("FavoriteCards") ?? "{}";
    const savedItems = JSON.parse(savedItemsStr);
    let data = [];
    Object.keys(savedItems).forEach((key) => {
      data.push({
        player: key,
        data: savedItems[key],
      });
    });
    setFavoriteCards(data);
    setIsVoteBtnDisabled(
      Object.keys(savedItems[`R${Object.keys(savedItems).length - 1}`] ?? {})
        .length != 4
    );
  }, []);

  return (
    <div className="boardgame-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <h1 className="title">
        WELCOME TO THE WHAT DO YOU MEME GAME
        <p> GIPHY VERSION</p>
      </h1>
      <header>
        <div className="header-container">
          {players.slice(0, 2).map((player, index) => (
            <div className="player-container" key={index}>
              <h2>{player}</h2>
              <Button
                variant="secondary"
                className="big-btn see-card-btn"
                style={{ backgroundColor: "green" }}
                onClick={() => {
                  navigate(`/playercard`, { state: { player } });
                }}
              >
                Get your Cards
              </Button>
            </div>
          ))}
        </div>
      </header>
      <footer>
        <div className="footer-container">
          {players.slice(2, 4).map((player, index) => (
            <div className="player-container" key={index}>
              <h2>{player}</h2>
              <Button
                variant="secondary"
                className="big-btn see-card-btn"
                style={{ backgroundColor: "green" }}
                onClick={() => {
                  navigate(`/playercard`, { state: { player } });
                }}
              >
                Get your Cards
              </Button>
            </div>
          ))}
        </div>
      </footer>
      <div className="meme-container">
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <div style={{ backgroundColor: "powderblue", padding: "20px" }}>
            <img
              src={giphy}
              alt=""
              style={{
                height: "350px",
                width: "100%",
                display: "block",
                margin: "0 auto",
              }}
            />
            <div style={{ textAlign: "center" }}>
              <h2>Look this Giphy and match your caption card</h2>
              <p>What caption makes you laugh when you look at this Meme?</p>
            </div>
            {/* <Button
              variant="primary"
              style={{
                // display: "block",
                // margin: "0 auto",
                marginTop: "20px",
                backgroundColor: isVoteBtnDisabled ? "red" : "blue",
              }}
              onClick={() => {
                console.log("navigate")
                navigate("favoritecards");
              }}
              disabled={isVoteBtnDisabled}
            >
              Let`s vote
            </Button> */}

            <button
              style={{
                marginTop: 30,
                backgroundColor: "green",
                transition: "all 0.5s ease",
                padding: 15,
                fontSize: 18,
                borderRadius: 5,
                backgroundColor: isVoteBtnDisabled ? "red" : "blue",
              }}
              variant="secondary"
              className="see-card-btn "
              onClick={() => {
                navigate("/favoritecards");
              }}
              disabled={isVoteBtnDisabled}
            >
              Let`s vote
            </button>

            <Button
              variant="primary"
              style={{ display: "block", margin: "0 auto", marginTop: "60px" }}
              onClick={() => setFetching(!fetching)}
            >
              Next Meme
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoardGame;
