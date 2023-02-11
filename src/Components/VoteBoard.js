import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useNavigate } from "@reach/router";

import "./VoteBoard.css";

const VoteBoard = ({ giphy, location }) => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const savedItemsStr = localStorage.getItem("FavoriteCards") ?? "{}";
    const savedItems = JSON.parse(savedItemsStr);
    let players = [];
    Object.keys(savedItems).forEach((key) => {
      players.push({
        player: key,
        data: savedItems[key],
      });
    });
    console.log("players", players);
    setPlayers(players.sort((a, b) => b.data.count - a.data.count));
  }, []);

  const handleClick = () => {
    navigate("/boardgame", {
      state: { players: players },
    });
  };

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.player}</td>
              <td>{player.data.count}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="justify-center">
        <Button
          variant="secondary"
          onClick={() => {
            navigate("/winner");
          }}
        >
          Winner
        </Button>
      </div>

      {/* <h1 className="title">NOW LET'S VOTE FOR THE BEST CAPTION</h1>
      <h3 style={{ textAlign: "center" }}>
        PICK THE CAPTION THAT MAKES MORE SENSE WITH THE GIPHY MEME DISPLAYED
      </h3>
      <video src="/videos/video-3.mp4" autoPlay loop muted /> */}
      {/* <header>
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
      </footer> */}
      {/* <Container style={{ marginTop: "160px" }}>
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
      </Container> */}
    </div>
  );
};

export default VoteBoard;
