// Game.js
import React, { useState } from "react";
import PlayerHand from "./PlayerHand";
import SelectedCards from "./SelectedCards";

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
    <div>
      {selectedCards.length === 0 ? (
        <PlayerHand onCardSelect={onCardSelect} />
      ) : (
        <SelectedCards selected Cards={selectedCards} onVote={onVote} />
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
  );
};

export default Game;
