//this is actually scoreboard
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
            <div className="meme-container">
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <div style={{ backgroundColor: "powderblue", padding: "30px" }}>
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
                  <div style={{ textAlign: "center", marginTop: "30px" }}>
                    {/* <h2>Look this Giphy and match your caption card</h2> */}
                    <p> What caption matches better with this Meme?</p>
                  </div>
                  <Button
                    variant="primary"
                    size="lg"
                    block
                    onClick={handleClick}
                  >
                    Next Game
                  </Button>
                  <Row style={{ marginTop: "30px" }}>
                    <Col md={{ span: 3.1, offset: 3.1 }}>
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
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default VoteBoard;
