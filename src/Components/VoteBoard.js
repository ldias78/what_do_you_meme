import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "@reach/router";

const VoteBoard = ({ selectedMeme }) => {
  const navigate = useNavigate();
  return (
    <Container style={{ marginTop: "160px" }}>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Card style={{ backgroundColor: "powderblue" }}>
            <Card.Img
              variant="top"
              src={selectedMeme}
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
          <Button
            variant="primary"
            size="lg"
            block
            onClick={() => navigate("/boardgame")}
          >
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
  );
};

export default VoteBoard;
