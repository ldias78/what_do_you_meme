import React, { useState } from "react";
import { navigate } from "@reach/router";
import "./MainPage.css";

import { MAX_PLAYERS } from "../constant";

const MainPage = () => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const handleDone = () => {
    if (players.length < MAX_PLAYERS && playerName !== "") {
      setPlayers([...players, `Player ${players.length + 1}: ${playerName}`]);
      setPlayerName("");
    }
    if (players.length === MAX_PLAYERS - 1) {
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
        <div className="input-button-container">
          <label>
            <h1>Player Name:</h1>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              required
              disabled={inputDisabled}
              onKeyPress={handleKeyPress}
              placeholder="type name here"
            />
          </label>
          <button
            type="button"
            className="button-resize"
            style={{ marginTop: "90px" }}
            onClick={handleDone}
            disabled={inputDisabled}
          >
            Done
          </button>
        </div>
      </form>
      <div className="player-list-container">
        <div className="player-list">
          {players.map((player, i) => (
            <div key={i}>{player}</div>
          ))}
        </div>
      </div>
      {players.length === MAX_PLAYERS && (
        <button
          type="button"
          className="start-game-button"
          onClick={() => {
            localStorage.removeItem("FavoriteCards");
            navigate("/boardgame", { state: { players } });
          }}
        >
          Start Game
        </button>
      )}
    </div>
  );
};

export default MainPage;
