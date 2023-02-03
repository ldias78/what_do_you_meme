import React from "react";
import { Card } from "react-bootstrap";

const VoteBoard = (props) => {
  const { selectedMeme } = props;
  return (
    <div>
      <Card style={{ backgroundColor: "powderblue" }}>
        <Card.Img
          variant="top"
          src={selectedMeme}
          style={{ height: "350px", width: "100%" }}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            Look this Giphy and match your caption card
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            What caption makes you laugh when you look at this Meme?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default VoteBoard;
