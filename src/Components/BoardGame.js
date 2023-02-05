import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import "./BoardGame.css";
import axios from "axios";
import { navigate } from "@reach/router";

const BoardGame = () => {
  const [giphy, setGiphy] = useState("");
  const [fetching, setFetching] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState("");
  // eslint-disable-next-line
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 },
    { name: "Player 3", score: 0 },
    { name: "Player 4", score: 0 },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const apiRoot = "https://api.giphy.com/v1/gifs/";
      const api_key = process.env.REACT_APP_GIPHY_KEY;
      const result = await axios(`${apiRoot}trending?api_key=${api_key}`);
      const randomIndex = Math.floor(Math.random() * 50);
      setGiphy(result.data.data[randomIndex].images.fixed_height.url);
    };
    fetchData();
  }, [fetching]);

  const handleMemeSelection = (meme) => {
    setSelectedMeme(meme);
  };

  const handleVote = () => {
    navigate("/voteboard", { state: { selectedMeme } });
  };

  return (
    <div className="boardgame-container">
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
                navigate("/player1cards", { state: { player: players[0] } })
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
                navigate("/player2cards", { state: { player: players[1] } })
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
                navigate("/player3cards", { state: { player: players[2] } })
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
                navigate("/player4cards", { state: { player: players[3] } })
              }
            >
              Get your Cards
            </Button>
          </div>
        </div>
      </footer>
      <div className="meme-container">
        <div style={{ textAlign: "center", marginTop: "120px" }}>
          <Card style={{ backgroundColor: "powderblue" }}>
            <Card.Img
              variant="top"
              src={giphy}
              style={{ height: "350px", width: "100%" }}
              onClick={() => handleMemeSelection(giphy)}
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
            </Card.Body>
          </Card>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "120px" }}>
        <Button
          variant="secondary"
          onClick={handleVote}
          style={{ fontSize: "3em" }}
        >
          Let's Vote
        </Button>
      </div>
    </div>
  );
};

export default BoardGame;
