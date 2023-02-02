import React from "react";
import { Router } from "@reach/router";
import MainPage from "./MainPage";
import BoardGame from "./BoardGame";
import VoteBoard from "./VoteBoard";

const App = () => {
  return (
    <div className="app">
      <Router>
        <MainPage path="/" />
        <BoardGame path="/boardgame" />
        <VoteBoard path="/voteboard" />
      </Router>
    </div>
  );
};
export default App;
