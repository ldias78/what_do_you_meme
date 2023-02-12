import React from "react";
import { navigate } from "@reach/router";
import "./Winner.css";
import { Button } from "react-bootstrap";

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
        <Button
          style={{
            marginTop: 30,
            backgroundColor: "green",
            transition: "all 0.5s ease",
            padding: 15,
            fontSize: 18,
            borderRadius: 5,
          }}
          variant="secondary"
          className="see-card-btn "
          onClick={() => {
            navigate("/boardgame");
          }}
        >
          PLAY AGAIN
        </Button>
        <Button className="start-over" onClick={handleClick}>
          START OVER
        </Button>
      </footer>
    </div>
  );
}
export default Winner;
