import React, { useState } from "react";
import CardCaptions from "./CardCaptions";

const ShuffleDeck = () => {
  const [captions, setCaptions] = useState(Array(100).fill(<CardCaptions />));

  setCaptions(
    captions
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1])
  );
  return (
    <div className="cards">
      {captions.map((caption) => (
        <div className="card">
          <p>{caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ShuffleDeck;
