import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "@reach/router";

const VoteBoard = ({ giphy }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="title">NOW LET'S VOTE FOR THE BEST CAPTION</h1>
      <h3 style={{ textAlign: "center" }}>
        PICK THE CAPTION THAT MAKES MORE SENSE WITH THE GIPHY MEME DISPLAYED
      </h3>
      <video src="/videos/video-3.mp4" autoPlay loop muted />
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
    </div>
  );
};

export default VoteBoard;
