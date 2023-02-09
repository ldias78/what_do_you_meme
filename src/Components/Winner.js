import React from "react";
import { navigate } from "@reach/router";
import "./Winner.css";

function Winner() {
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>CONGRATULATIONS TO THE WINNER!</h1>
      <video src="/videos/video-4.mp4" autoPlay loop muted />
      <footer style={{ display: "flex", justifyContent: "center" }}>
        <button className="start-over" onClick={handleClick}>
          START OVER
        </button>
      </footer>
    </div>
  );
}

export default Winner;
