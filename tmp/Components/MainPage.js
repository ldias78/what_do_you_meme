import React, { useState } from "react";
import { navigate } from "@reach/router";
import "./MainPage.css";

const MainPage = () => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (players.length === 4) {
      navigate("/boardgame", { state: { players } });
    }
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleDone = () => {
    if (players.length < 4 && playerName !== "") {
      setPlayers([...players, playerName]);
      setPlayerName("");
    }
    if (players.length === 3) {
      setInputDisabled(true);
    }
  };

  return (
    <div className="main-page">
      <h1 className="title">WELCOME TO THE WHAT DO YOU MEME GAME</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Player Name:
            <input
              type="text"
              value={playerName}
              onChange={handleChange}
              required
              disabled={inputDisabled}
            />
          </label>
          <button type="button" onClick={handleDone} disabled={inputDisabled}>
            Done
          </button>
        </div>
        <div className="player-list">
          {players.map((player, i) => (
            <div key={i}>{player}</div>
          ))}
        </div>
        {players.length === 4 && (
          <button type="submit" className="start-game-button">
            Start Game
          </button>
        )}
      </form>
    </div>
  );
};

export default MainPage;
