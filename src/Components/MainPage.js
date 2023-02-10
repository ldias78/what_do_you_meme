import React, { useState } from "react";
import { navigate } from "@reach/router";
import "./MainPage.css";

const MainPage = () => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const handleClick = () => {
    navigate("/boardgame", {
      state: { players: players },
    });
  };

  const handleDone = () => {
    if (players.length < 4 && playerName !== "") {
      const playerInfo = { playerName, score: 0 };
      setPlayers([...players, playerInfo]);
      setPlayerName("");
    }
    if (players.length === 3) {
      setInputDisabled(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="main-page">
      <video src="/videos/video-2.mp4" autoPlay loop muted />

      <form className="input-container">
        <div>
          <label>
            <h1>Player Name:</h1>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              required
              disabled={inputDisabled}
              onKeyPress={handleKeyPress}
            />
          </label>
          <button type="button" onClick={handleDone} disabled={inputDisabled}>
            Done
          </button>
        </div>
      </form>
      <div className="player-list-container">
        <div className="player-list">
          {players.map((player, i) => (
            <div key={i}>{player.playerName}</div>
          ))}
        </div>
      </div>
      {players.length === 4 && (
        <button
          type="button"
          className="start-game-button"
          onClick={handleClick}
        >
          Start Game
        </button>
      )}
    </div>
  );
};

export default MainPage;
