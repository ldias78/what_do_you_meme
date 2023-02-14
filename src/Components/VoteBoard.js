import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "@reach/router";
import "./VoteBoard.css";

const VoteBoard = ({ giphy, location }) => {
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);
  useEffect(() => {
    const savedItemsStr = localStorage.getItem("FavoriteCards") ?? "{}";
    const savedItems = JSON.parse(savedItemsStr);
    let players = {};
    Object.keys(savedItems).forEach((round) => {
      Object.keys(savedItems[round]).forEach((p) => {
        const temp = {
          player: p,
          totalScore: players[p]
            ? players[p].totalScore + savedItems[round][p].count
            : savedItems[round][p].count ?? 0,
        };
        players[p] = temp;
      });
    });
    let scores = [];
    Object.keys(players).forEach((element) => {
      scores.push({
        player: players[element].player,
        totalScore: players[element].totalScore,
      });
    });
    setScores(scores.sort((a, b) => b.totalScore - a.totalScore));
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          marginTop: "-60px",
          marginBottom: "0px",
          color: "green",
        }}
      >
        CONGRATULATIONS TO THE WINNER!
      </h1>
      <video
        className="video-background"
        src="/videos/video-3.mp4"
        autoPlay
        loop
        muted
      />
      <div className="table-container">
        <Table striped bordered hover style={{ marginTop: "100px" }}>
          <thead style={{ backgroundColor: "coral" }}>
            <tr>
              <th>#</th>
              <th>Player Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((player, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "green" : "lightgrey",
                }}
              >
                <td>{index + 1}</td>
                <td>{player.player}</td>
                <td>{player.totalScore}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <button className="start-over" onClick={handleClick}>
          START OVER
        </button>
      </div>
    </div>
  );
};

export default VoteBoard;
