import React, { useState } from "react";
import { navigate } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
// from {Player}"./MainPage";

const Player = () => {
  const PlayerTop = () => {
    return (
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        {/* {Player.name} */}
        {/* <CardDeck></CardDeck> */}
      </div>
    );
  };

  const PlayerRight = () => {
    return (
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        {/* {Player.name} */}
        {/* <CardDeck></CardDeck> */}
      </div>
    );
  };

  const BottomLeft = () => {
    return (
      <div style={{ position: "absolute", bottom: 0, left: 0 }}>
        {" "}
        {/* {Player.name} */}
        {/* <CardDeck></CardDeck> */}
      </div>
    );
  };

  const BottomRight = () => {
    return (
      <div style={{ position: "absolute", bottom: 0, right: 0 }}>
        {" "}
        {/* {Player.name} */}
        {/* <CardDeck></CardDeck> */}
      </div>
    );
  };
};
