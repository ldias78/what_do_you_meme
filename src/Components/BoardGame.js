import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import "./BoardGame.css";
import { navigate } from "@reach/router";

const BoardGame = ({ setFetching, fetching, giphy }) => {
  const [selectedMeme, setSelectedMeme] = useState("");
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0, cards: [] },
    { name: "Player 2", score: 0, cards: [] },
    { name: "Player 3", score: 0, cards: [] },
    { name: "Player 4", score: 0, cards: [] },
  ]);

  const handleVote = () => {
    navigate("/voteboard", { state: { selectedMeme } });
  };

  const handleGetCards = (player) => {
    navigate("/playcard", { state: { playcard: player } });
  };

  return (
    <div className="boardgame-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1 className="title">
        WELCOME TO THE WHAT DO YOU MEME GAME
        <p>GIPHY VERSION</p>
      </h1>
      <header>
        <div className="header-container">
          <div className="player-container">
            <h2>Player 1</h2>
            <Button
              variant="secondary"
              className="big-btn see-card-btn"
              onClick={() => handleGetCards(players[0])}
            >
              Get your Cards
            </Button>
          </div>
          <div className="player-container">
            <h2>Player 2</h2>
            <Button
              variant="secondary"
              className="big-btn see-card-btn"
              onClick={() => handleGetCards(players[1])}
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
              onClick={() => handleGetCards(players[2])}
            >
              Get your Cards
            </Button>
          </div>
          <div className="player-container">
            <h2>Player 4</h2>
            <Button
              variant="secondary"
              className="big-btn see-card-btn"
              onClick={() => handleGetCards(players[3])}
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
              style={{ height: "300px", width: "100%", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {selectedMeme || "Select a Meme"}
              </Card.Title>
              <Button
                variant="primary"
                className="vote-btn"
                onClick={handleVote}
                disabled={selectedMeme === ""}
              >
                Vote
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default BoardGame;
