import React, { useState } from "react";
import Randomphrases from "./Randomphrases.json";
import "./CardDeck.css";

const Card = ({ quote }) => (
  <div className="cards">
    <div className="card">
      <p>{quote}</p>
    </div>
  </div>
);

const PlayerHand = ({ onCardSelect }) => {
  let players = [[], [], [], []];
  let numberOfCards = 7;

  for (let i = 0; i < numberOfCards * 4; i++) {
    let currentPlayer = i % 4;
    players[currentPlayer].push(Randomphrases[i]);
  }
  console.log(players[0]);

  return (
    <div>
      <h2>Player 1</h2>
      {players[0].map((quote, index) => (
        <Card key={index} quote={quote.quote} />
      ))}

      <h2>Player 2</h2>
      {players[1].map((quote, index) => (
        <Card key={index} quote={quote.quote} />
      ))}
      <h2>Player 3</h2>
      {players[2].map((quote, index) => (
        <Card key={index} quote={quote.quote} />
      ))}
      <h2>Player 4</h2>
      {players[3].map((quote, index) => (
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
