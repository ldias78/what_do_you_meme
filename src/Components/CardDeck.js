import React from "react";
import Randomphrases from "./Randomphrases.json";
import "./CardDeck.css";

const Card = ({ quote }) => (
  <div className="cards">
    <div className="card">
      <p>{quote}</p>
    </div>
  </div>
);
export default Card;
