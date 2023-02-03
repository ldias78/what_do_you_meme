import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./BoardGame.css";
import axios from "axios";
// import CardDeck from "./CardDeck";
import MainPage from "./MainPage";

const BoardGame = (props) => {
  const [giphy, setGiphy] = useState("");
  const [fetching, setFetching] = useState("false");
  const Currentplayers = props.location.state.players;
  useEffect(() => {
    const fetchData = async () => {
      const apiRoot = "https://api.giphy.com/v1/gifs/";
      const api_key = process.env.REACT_APP_GIPHY_KEY;
      const result = await axios(`${apiRoot}trending?api_key=${api_key}`);
      console.log(result);
      const randomIndex = Math.floor(Math.random() * 50);
      setGiphy(`${result.data.data[randomIndex].images.fixed_height.url}`);
    };
    fetchData();
  }, [fetching]);
  return (
    <div>
      {Currentplayers.map((player, num) => (
        <h5 key={num}>
          {" "}
          Player {num + 1}:{player}{" "}
        </h5>
      ))}
      <Container style={{ marginTop: "160px" }}>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BoardGame;
