import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import "./BoardGame.css";
// import axios from "axios";
import { router, navigate } from "@reach/router";

const BoardGame = ({ setFetching, fetching, giphy }) => {
  const [selectedMeme] = useState("");
  // eslint-disable-next-line
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 },
    { name: "Player 3", score: 0 },
    { name: "Player 4", score: 0 },
  ]);

  const handleVote = () => {
    navigate("/voteboard", { state: { selectedMeme } });
  };

  return (
    <div className="boardgame-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1 className="title">
        WELCOME TO THE WHAT DO YOU MEME GAME
        <p> GIPHY VERSION</p>
      </h1>
      <header>
        <div className="header-container">
          <div className="player-container">
            <h2>Player 1</h2>
            <Button
              variant="secondary"
              className="big-btn see-card-btn"
              onClick={() =>
                navigate("/playcard", { state: { cardtest: players[0] } })
              }
            >
              Get your Cards
            </Button>
          </div>
          <div className="player-container">
            <h2>Player 2</h2>
            <Button
              variant="secondary"
              className="big-btn see-card-btn"
              onClick={() =>
                navigate("/playcard", { state: { cardtest: players[1] } })
              }
            >
              Get your Cards
            </Button>
          </div>
        </div>
      </header>
      <footer>
        <div className="footer-container">
          <div className="player-container">
            <h2>Player 3</h2>
            <Button
              variant="secondary"
              className="big-btn see-card-btn"
              onClick={() =>
                navigate("/playcard", { state: { cardtest: players[2] } })
              }
            >
              Get your Cards
            </Button>
          </div>
          <div className="player-container">
            <h2>Player 4</h2>
            <Button
              variant="secondary"
              className="big-btn see-card-btn"
              onClick={() =>
                navigate("/playcard", { state: { cardtest: players[2] } })
              }
            >
              Get your Cards
            </Button>
          </div>
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
