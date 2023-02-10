import React, { useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import Randomphrases from "./Randomphrases.json";
import "./CardDeck.css";
import { Router } from "@reach/router";

const Card = ({ quote }) => (
  <div className="cards">
    <div className="card">
      <p>{quote}</p>
    </div>
  </div>
);

const PlayerHand = ({ player, onCardSelect }) => {
  let players = [[], [], [], []];
  let numberOfCards = 7;

  for (let i = 0; i < numberOfCards * 4; i++) {
    let currentPlayer = i % 4;
    players[currentPlayer].push(Randomphrases[i]);
  }

  return (
    <div>
      <h2>Player {player + 1}</h2>
      {players[player].map((quote, index) => (
        <Card
          key={index}
          quote={quote.quote}
          onClick={() => onCardSelect(quote)}
        />
      ))}
    </div>
  );
};

const SelectedCard = ({ quote, onClick }) => (
  <div className="selected-card">
    <p>{quote.quote}</p>
    <button onClick={onClick}>Vote</button>
  </div>
);

const SelectedCards = ({ selectedCards, onVote, onBackToBoard }) => (
  <div>
    {selectedCards.map((quote, index) => (
      <SelectedCard key={index} quote={quote} onClick={() => onVote(quote)} />
    ))}
    <button onClick={onBackToBoard}>Back to Board</button>
  </div>
);

const Game = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [votes, setVotes] = useState({});

  const onCardSelect = (quote) => {
    setSelectedCards([...selectedCards, quote]);
  };

  const onVote = (quote) => {
    setVotes({ ...votes, [quote.quote]: (votes[quote.quote] || 0) + 1 });
  };

  const onBackToBoard = () => {
    setSelectedCards([]);
    setVotes({});
  };


  return (
    <Router>
      <Route
        path="/"
        render={() => (
          <div>
            <Link to="/player/0">Player 1</Link>
            <Link to="/player/1">Player 2</Link>
            <Link to="/player/2">Player 3</Link>
            <Link to="/player/3">Player 4</Link>
          </div>
        )}
      />
        <div
          path="/player/:player"
          render={({ match }) => (
            <div>
              {selectedCards.length === 0 ? (
                <PlayerHand
                  player={match.params.player}
                  onCardSelect={onCardSelect}
                />
              ) : (
                <SelectedCards
                  selectedCards={selectedCards}
                  onVote={onVote}
                  onBackToBoard={onBackToBoard}
                />
              )}
              {selectedCards.length > 0 && (
                <div className="results">
                  <h2>Results:</h2>
                  {Object.entries(votes).map(([quote, voteCount]) => (
                    <div key={quote}>
                      {quote}: {voteCount} vote(s)
                    </div>
                  ))}
                  <button onClick={onBackToBoard}>Back to Board</button>
                </div>
              )}
            </div>
              )}
              </div>
        </Router>
);
}
export default Game;