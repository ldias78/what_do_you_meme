import React from "react";
import { Router } from "@reach/router";
import MainPage from "./MainPage";
import BoardGame from "./BoardGame";

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
