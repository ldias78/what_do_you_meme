import React from "react";
import { navigate } from "@reach/router";
import "./Winner.css";

function Winner() {
  const handleClick = () => {
    localStorage.removeItem("FavoriteCards");
    navigate("/");
  };

  return (
    <div className="page-container">
      <div className="label-container">
        <h1
          style={{
            textAlign: "center",
            color: "#a32e9e",
          }}
        >
          CONGRATULATIONS TO THE WINNER!
        </h1>
      </div>

      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <footer style={{ display: "flex", justifyContent: "center" }}>
        <button className="start-over" onClick={handleClick}>
          START OVER
        </button>
      </footer>
    </div>
  );
}

export default Winner;
