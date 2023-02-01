import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>Time's up!</span>;

ReactDOM.render(
  <Countdown date={Date.now() + 60000}>
    <Completionist />
  </Countdown>,
  document.getElementById("root")
);
