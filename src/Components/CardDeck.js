import React, { useState } from "react";
import CardCaptions from "./CardCaptions";
import PlayerList from "./CardCaptions";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CardDeck = () => {
  const deckCount = 100;
  const [deck, setDeck] = useState(
    Array.from({ length: deckCount }, (_, i) => i + 1)
  );
  const [players, setPlayers] = useState([]);

  const dealCards = () => {
    if (deck.length === 0) {
      return;
    }

    const Player = [];
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      const card = deck.splice(randomIndex, 1)[0];
      Player.push(card);
    }

    setPlayers([...players, Player]);
  };

  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card key={idx} number={CardCaptions}>
              <Card.Title>
                <PlayerList />
              </Card.Title>
              <Card.Body>
                {players.map((hand, handIndex) => (
                  <div key={handIndex} className="player-hand">
                    {hand.map((CardCaptions, cardIndex) => (
                      <CardCaptions key={cardIndex} number={CardCaptions} />
                    ))}
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardDeck;
