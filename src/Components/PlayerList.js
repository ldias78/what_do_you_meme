import React from "react";
import MainPage from "./MainPage";

const Player = (props) => {
  return (
    <button className="deal" onClick={dealCards}>
      Deal 7 Cards
    </button>
  );
};
