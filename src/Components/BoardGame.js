import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import "./BoardGame.css";
// import axios from "axios";
import { navigate } from "@reach/router";

const BoardGame = (props) => {
  const { setFetching, fetching, giphy, location } = props;
  const players = location?.state?.players;
  const [selectedMeme] = useState("");

  const handleVote = () => {
    navigate("/voteboard", { state: { selectedMeme, players } });
  };

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
              <h2>{player.playerName}</h2>
              <Button
                variant="secondary"
                className="big-btn see-card-btn"
                onClick={() =>
                  navigate(`/player${index + 1}cards`, { state: { player } })
                }
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
              <h2>{player.playerName}</h2>
              <Button
                variant="secondary"
                className="big-btn see-card-btn"
                onClick={() =>
                  navigate(`/player${index + 3}cards`, { state: { player } })
                }
              >
                Get your Cards
              </Button>
            </div>
          ))}
        </div>
      </footer>
      <div className="meme-container">
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <Card style={{ backgroundColor: "powderblue" }}>
            <Card.Img
              variant="top"
              src={giphy}
              style={{ height: "350px", width: "100%" }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Look this Giphy and match your caption card
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                What caption makes you laugh when you look at this Meme?
              </Card.Text>
              <Button
                variant="primary"
                style={{ display: "block", margin: "0 auto" }}
                onClick={() => setFetching(!fetching)}
              >
                Next Meme
              </Button>
              <div style={{ textAlign: "center", marginTop: "60px" }}>
                <Button variant="secondary" onClick={handleVote}>
                  Let's Vote
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BoardGame;
