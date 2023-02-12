//this is actually voteboard
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
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
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.player}</td>
              <td>{player.data.count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="justify-center">
        <Button variant="secondary" onClick={() => navigate("/winner")}>
          Winner
        </Button>
      </div>
    </div>
  );
};

export default VoteBoard;
