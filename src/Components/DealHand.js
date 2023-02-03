import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./MainPage";

const HandleCard = ({ frontCard, backCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div style={styles.cardContainer} onClick={() => setIsFlipped(!isFlipped)}>
      <img
        src={isFlipped ? backCard : frontCard}
        alt="card"
        style={styles.cardImage}
      />
    </div>
  );
};

export default HandleCard;
