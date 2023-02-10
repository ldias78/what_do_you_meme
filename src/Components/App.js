import React, { useEffect, useState } from "react";
// import { createRoot } from "react-dom/client";
import { Router, navigate } from "@reach/router";
import MainPage from "./MainPage";
import BoardGame from "./BoardGame";
import FavoriteCards from "./FavoriteCards";
import PlayCard from "./PlayCard";
import VoteBoard from "./VoteBoard";
import Winner from "./Winner";
import axios from "axios";

const App = (props) => {
  const [giphy, setGiphy] = useState("");
  const [fetching, setFetching] = useState("false");
  const [players, setPlayers] = useState([]);

  const handleClick = (players) => {
    setPlayers(players);
    navigate("/boardgame", { state: { players: players } });
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiRoot = "https://api.giphy.com/v1/gifs/";
      const api_key = process.env.REACT_APP_GIPHY_KEY;
      const result = await axios(`${apiRoot}trending?api_key=${api_key}`);
      console.log(result);
      const randomIndex = Math.floor(Math.random() * 50);
      setGiphy(`${result.data.data[randomIndex].images.fixed_height.url}`);
    };
    fetchData();
  }, [fetching]);

  return (
    <div className="app">
      <Router>
        <MainPage path="/" handleClick={handleClick} />
        <BoardGame
          path="/boardgame"
          players={players}
          setFetching={setFetching}
          fetching={fetching}
          giphy={giphy}
        />
        <VoteBoard path="/voteboard" giphy={giphy} />
        <PlayCard path="/playcard" />
        <FavoriteCards path="/favoritecards" />
        <Winner path="/winner" />
      </Router>
    </div>
  );
};
export default App;
