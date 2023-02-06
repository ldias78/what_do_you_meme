import React from "react";
import "./Winner.css";

function Winner() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>CONGRATULATIONS TO THE WINNER!</h1>
      <video src="/videos/video-4.mp4" autoPlay loop muted />
    </div>
  );
}

export default Winner;
