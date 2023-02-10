import React, { useState } from "react";
import { navigate } from "@reach/router";
import "./MainPage.css";

const MainPage = () => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const handleStartGame = (names) => {
    navigate("/boardgame", { state: { names } });
  };
  const handleDone = () => {
    if (players.length < 4 && playerName !== "") {
      setPlayers([...players, `Player ${players.length + 1}: ${playerName}`]);
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
      <h1 className="title">WELCOME TO THE WHAT DO YOU MEME GAME</h1>

      <form className="input-container">
        <div>
          <label>
            <h2>Player Name:</h2>
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
            <div key={i}>{player}</div>
          ))}
        </div>
      </div>
      {players.length === 4 && (
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
