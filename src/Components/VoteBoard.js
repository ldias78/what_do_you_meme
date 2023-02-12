import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "@reach/router";
import "./VoteBoard.css";

const VoteBoard = ({ giphy, location }) => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const savedItemsStr = localStorage.getItem("FavoriteCards") ?? "{}";
    const savedItems = JSON.parse(savedItemsStr);
    let players = [];
    Object.keys(savedItems).forEach((key) => {
      players.push({
        player: key,
        data: savedItems[key],
      });
    });
    setPlayers(players.sort((a, b) => b.data.count - a.data.count));
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
          marginBottom: "60px",
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
            {players.map((player, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "green" : "lightgrey",
                }}
              >
                <td>{index + 1}</td>
                <td>{player.player}</td>
                <td>{player.data.count}</td>
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
