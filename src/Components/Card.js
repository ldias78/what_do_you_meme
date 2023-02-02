import React from "react";
import Randomphrases from "./Randomphrases.json";
import "bootstrap/dist/css/bootstrap.css";

const Card = (props) => {
  const randomIndex = Math.floor(
    Math.random() * Randomphrases.Randomphrases.length
  );
  const caption = Randomphrases.Randomphrases[randomIndex];

  return (
    <div className="card text-dark bg-light mb-3">
      <div className="card-body">
        <h5 className="card-title">{caption.quote}</h5>
      </div>
    </div>
  );
};

export default Card;
