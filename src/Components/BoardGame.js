import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./BoardGame.css";
import axios from "axios";
import { navigate } from "@reach/router";

const BoardGame = () => {
  const [giphy, setGiphy] = useState("");
  const [fetching, setFetching] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState("");
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
      <div className="player-1">
        <h2>Player 1</h2>
      </div>
      <div className="player-2">
        <h2>Player 2</h2>
      </div>
      <Container style={{ marginTop: "160px" }}>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
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
          </Col>
        </Row>
      </Container>
      <div className="player-3">
        <h2>Player 3</h2>
      </div>
      <div className="player-4">
        <h2>Player 4</h2>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button variant="secondary" onClick={handleVote}>
          Let's Vote
        </Button>
      </div>
    </div>
  );
};

export default BoardGame;
