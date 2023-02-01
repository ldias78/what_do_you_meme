import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Randomphrases from "./Randomphrases.json";

const CardsDeck = () => {
  const [selectedCaption, setSelectedCaption] = useState();

  const handleSelectCaption = (caption) => {
    setSelectedCaption(caption);
  };

  return (
    <div className="d-flex flex-wrap">
      {Randomphrases.map((caption) => (
        <Card
          key={caption.id}
          style={{ width: "18rem", margin: "1rem" }}
          onClick={() => handleSelectCaption(caption)}
        >
          <Card.Body>
            <Card.Text>{caption.quote}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardsDeck;
