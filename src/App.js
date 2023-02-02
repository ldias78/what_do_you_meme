import React from "react";
import { Router } from "@reach/router";
import MainPage from "./Components/MainPage";
import BoardGame from "./Components/BoardGame";
import CardDeck from "./Components/CardDeck";

const App = () => {
  return (
    <div className="app">
      <Router>
        <MainPage path="/" />
        <BoardGame path="/boardgame" />
      </Router>
      {/* <PlayBoard />
      <CardDeck /> */}
    </div>
  );
};

export default App;
