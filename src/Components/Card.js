import React from "react";
// import { Card } from "react-bootstrap";
import Randomphrases from "./Randomphrases.json";
import "bootstrap/dist/css/bootstrap.css";

const Card = () => {
  const CardCaptions = (props) => {
    return (
      <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          {Randomphrases.map((captions) => (
            <h5 class="card-title">{captions.quote}</h5>
          ))}
        </div>
      </div>
    );
  };
};

export default Card;
