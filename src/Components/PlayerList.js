import React, { useState } from "react";
import { navigate } from "@reach/router";
import MainPage from "./MainPage";
import { Container, Row, Col } from "react-bootstrap";

const PlayerList = () => {
  const [Currentplayers, setCurrentplayers] = useState([
    "Player 1",
    "Player 2",
    "Player 3",
    "Player 4",
  ]);

  return (
    <Container style={{ marginTop: "160px" }}>
      <Row>
        {Currentplayers.map((player, num) => (
          <Col md={6} key={num}>
            <h5 style={{ textAlign: "center" }}>
              Player {num + 1}: {player}
            </h5>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayerList;
