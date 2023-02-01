import React from "react";
import { Router } from "@reach/router";
import MainPage from "./Components/MainPage";
import BoardGame from "./Components/BoardGame";

const App = () => {
  return (
    <div className="app">
      <Router>
        <MainPage path="/" />
        <BoardGame path="/boardgame" />
      </Router>
    </div>
  );
};

export default App;
