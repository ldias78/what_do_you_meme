import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "@reach/router";
import "./VoteBoard.css";

const VoteBoard = ({ giphy, location }) => {
  const navigate = useNavigate();
  const players = location?.state?.players;

  const handleClick = () => {
    navigate("/boardgame", {
      state: { players: players },
    });
  };

  return (
    <div>
      <h1 className="title">NOW LET'S VOTE FOR THE BEST CAPTION</h1>
      <h3 style={{ textAlign: "center" }}>
        PICK THE CAPTION THAT MAKES MORE SENSE WITH THE GIPHY MEME DISPLAYED
      </h3>
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <header>
        <div className="header-container">
          {players.slice(0, 2).map((player, index) => (
            <div className="player-container" key={index}>
              <h2>{player.playerName}</h2>
            </div>
          ))}
        </div>
      </header>
      <footer>
        <div className="footer-container">
          {players.slice(2, 4).map((player, index) => (
            <div className="player-container" key={index}>
              <h2>{player.playerName}</h2>
            </div>
          ))}
        </div>
      </footer>
      <Container style={{ marginTop: "160px" }}>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Card style={{ backgroundColor: "powderblue" }}>
              <Card.Img
                variant="top"
                src={giphy}
                className="voteboard-card-img"
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  What caption matches better with this Meme?
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col md={{ span: 4, offset: 4 }}>
            <Button variant="primary" size="lg" block onClick={handleClick}>
              Next Game
            </Button>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col md={{ span: 4, offset: 4 }}>
            <Button
              variant="danger"
              size="lg"
              block
              onClick={() => navigate("/winner")}
            >
              Game Over
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VoteBoard;
