import React from "react";
// import { Card } from "react-bootstrap";
import Randomphrases from "./Randomphrases.json";
import "bootstrap/dist/css/bootstrap.css";

const Card = (props) => {
  // console.log(Randomphrases);
  console.log(Randomphrases.Randomphrases);
  // const CardCaptions = (props) =>
  return (
    <div className="card text-dark bg-light mb-3">
      <div className="card-header">Header</div>
      <div className="card-body">
        {Randomphrases.Randomphrases.map((caption) => (
          <h5 className="card-title" key={caption.id}>
            {caption.quote}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default Card;
