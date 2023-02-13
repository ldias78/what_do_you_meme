import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import MainPage from "./MainPage";
import BoardGame from "./BoardGame";
import VoteBoard from "./VoteBoard";
import axios from "axios";
import PlayCard from "./PlayCard";
import FavoriteCards from "./FavoriteCards";

const App = (props) => {
  const [giphy, setGiphy] = useState("");
  const [fetching, setFetching] = useState("false");
  useEffect(() => {
    const fetchData = async () => {
      const apiRoot = "https://api.giphy.com/v1/gifs/";
      const api_key = process.env.REACT_APP_GIPHY_KEY;
      const result = await axios(`${apiRoot}trending?api_key=${api_key}`);
      const randomIndex = Math.floor(Math.random() * 50);
      setGiphy(`${result.data.data[randomIndex].images.fixed_height.url}`);
    };
    fetchData();
  }, [fetching]);
  return (
    <div className="app">
      <Router>
        <MainPage path="/" />
        <BoardGame
          path="/boardgame"
          setFetching={setFetching}
          fetching={fetching}
          giphy={giphy}
        />
        <VoteBoard path="/voteboard" giphy={giphy} />
        {/* <Winner path="/winner" /> */}
        <PlayCard path="/playercard" />
        <FavoriteCards path="/favoritecards" giphy={giphy} />
      </Router>
    </div>
  );
};
export default App;
