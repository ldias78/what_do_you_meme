import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./BoardGame.css";
import { navigate } from "@reach/router";

const BoardGame = (props) => {
  const { setFetching, fetching, giphy, location } = props;
  const players = location?.state?.players ?? [];
  const handleVote = () => {
    navigate("/voteboard", { state: { players } });
  };

  const isDisabled = () => {};
  return (
    <div className="boardgame-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <h1 className="title">
        WELCOME TO THE WHAT DO YOU MEME GAME
        <p> GIPHY VERSION</p>
      </h1>
      <header>
        <div className="header-container">
          {players.slice(0, 2).map((player, index) => (
            <div className="player-container" key={index}>
              <h2>{player}</h2>
              <Button
                variant="secondary"
                className="big-btn see-card-btn"
                onClick={() => {
                  navigate(`/playercard`, { state: { player } });
                }}
              >
                Get your Cards
              </Button>
            </div>
          ))}
        </div>
      </header>
      <footer>
        <div className="footer-container">
          {players.slice(2, 4).map((player, index) => (
            <div className="player-container" key={index}>
              <h2>{player}</h2>
              <Button
                variant="secondary"
                className="big-btn see-card-btn"
                onClick={() => {
                  navigate(`/playercard`, { state: { player } });
                }}
              >
                Get your Cards
              </Button>
            </div>
          ))}
        </div>
      </footer>
      <div className="meme-container">
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <div style={{ backgroundColor: "powderblue", padding: "20px" }}>
            <img
              src={giphy}
              alt=""
              style={{
                height: "350px",
                width: "100%",
                display: "block",
                margin: "0 auto",
              }}
            />
            <div style={{ textAlign: "center" }}>
              <h2>Look this Giphy and match your caption card</h2>
              <p>What caption makes you laugh when you look at this Meme?</p>
            </div>
            <Button
              variant="primary"
              style={{ display: "block", margin: "0 auto", marginTop: "60px" }}
              onClick={() => setFetching(!fetching)}
            >
              Next Meme
            </Button>
            <div style={{ textAlign: "center", marginTop: "60px" }}>
              <Button
                variant="secondary"
                onClick={handleVote}
                disabled={isDisabled}
              >
                Let's Vote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoardGame;
