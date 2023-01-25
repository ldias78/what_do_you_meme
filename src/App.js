import logo from "./logo.svg";
import "./App.css";
import React from "react";

function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Meme</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Next</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
