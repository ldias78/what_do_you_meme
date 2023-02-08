// import React, { useState, useEffect } from "react";
// import "./CardDeck.css";
// import CardDeck from "./CardDeck";
// import ShuffleDeck from "./ShuffleDeck";

// const GameLogic = () => {
//   const [gameover, setGameover] = useState(true);
//   const [turn, setTurn] = useState("Player 1");
//   const [playedcardsDeck, setplayedcardsDeck] = useState([]);
//   const [drawcardDeck, setdrawcardDeck] = useState([]);
//   const [player1Deck, setPlayer1Deck] = useState([]);
//   const [player2Deck, setPlayer2Deck] = useState([]);
//   const [player3Deck, setPlayer3Deck] = useState([]);
//   const [player4Deck, setPlayer4Deck] = useState([]);
//   const [currentUser, setCurrentUser] = useState("");

//   useEffect(() => {
//     const shuffleCards = ShuffleDeck(CardDeck);
//     const startingCardIndex = Math.floor(Math.random() * 101);

//     const player1Deck = shuffleCards.splice(0, 7);
//     setPlayer1Deck(player1Deck);

//     const player2Deck = shuffleCards.splice(0, 7);
//     setPlayer2Deck(player2Deck);

//     const player3Deck = shuffleCards.splice(0, 7);
//     setPlayer3Deck(player3Deck);

//     const player4Deck = shuffleCards.splice(0, 7);
//     setPlayer4Deck(player4Deck);

//     const playedcardsDeck = shuffleCards.splice(startingCardIndex, 1);
//     setplayedcardsDeck(playedcardsDeck);

//     const drawcardDeck = shuffleCards;
//     setdrawcardDeck(drawcardDeck);
//   }, []);

//   useEffect(() => {
//     const state = {
//       gameOver: false,
//       turn: "Player 1",
//       player1Deck: [...player1Deck],
//       player2Deck: [...player2Deck],
//       player3Deck: [...player2Deck],
//       player4Deck: [...player2Deck],
//       playedcardsDeck: [...playedcardsDeck],
//       drawcardDeck: [...drawcardDeck],
//     };
//   }, []);

//   const initGameState = ({
//     gameOver,
//     turn,
//     player1Deck,
//     player2Deck,
//     playedCardsPile,
//     drawCardDeck,
//   }) => {
//     setGameOver(gameOver);
//     setTurn(turn);
//     setPlayer1Deck(player1Deck);
//     setPlayer2Deck(player2Deck);
//     setPlayedCardsDeck(playedCardsPile);
//     setdrawCardDeck(drawCardDeck);
//   };

//   const updateGameState = ({
//     gameOver,
//     turn,
//     player1Deck,
//     player2Deck,
//     playedCardsPile,
//     drawCardDeck,
//   }) => {
//     gameOver && setGameOver(gameOver);
//     turn && setTurn(turn);
//     player1Deck && setPlayer1Deck(player1Deck);
//     player2Deck && setPlayer2Deck(player2Deck);
//     playedCardsPile && setPlayedCardsDeck(playedCardsPile);
//     drawCardDeck && setdrawCardDeck(drawCardDeck);
//   };

//   const handleCurrentUserData = (name) => {
//     setCurrentUser(name);
//   };

//   useEffect(() => {
//     // retrieve the current user data from an API or data source
//     const retrieveCurrentUserData = async () => {
//       const response = await fetch("/api/currentUser");
//       const data = await response.json();
//       handleCurrentUserData(data.name);
//     };

//     retrieveCurrentUserData();
//   }, []);

//   return (
//     <div>
//       {currentUser === "Player 1" && (
//         <div className="player-view">
//           <h2>{turn}'s turn</h2>
//           <div className="player-hand">
//             {player1Deck.map((card, index) => (
//               <ShuffleDeck
//                 key={index}
//                 caption={card}
//                 onClick={() => handleCardDeck(card)}
//               />
//             ))}
//           </div>
//           <div className="played-cards">
//             {playedcardsDeck.map((card, index) => (
//               <ShuffleDeck key={index} caption={card} />
//             ))}
//           </div>
//         </div>
//       )}
//       {/* PLAYER 2 VIEW */}
//       {currentUser === "Player 2" && (
//         <div className="player-view">
//           <h2>{turn}'s turn</h2>
//           <div className="player-hand">
//             {player2Deck.map((card, index) => (
//               <ShuffleDeck
//                 key={index}
//                 caption={card}
//                 onClick={() => handleCardDeck(card)}
//               />
//             ))}
//           </div>
//           <div className="played-cards">
//             {playedcardsDeck.map((card, index) => (
//               <ShuffleDeck key={index} caption={card} />
//             ))}
//           </div>
//         </div>
//       )}
//       {/* PLAYER 3 VIEW */}
//       {currentUser === "Player 3" && (
//         <div className="player-view">
//           <h2>{turn}'s turn</h2>
//           <div className="player-hand">
//             {player3Deck.map((card, index) => (
//               <ShuffleDeck
//                 key={index}
//                 caption={card}
//                 onClick={() => handleCardDeck(card)}
//               />
//             ))}
//           </div>
//           <div className="played-cards">
//             {playedcardsDeck.map((card, index) => (
//               <ShuffleDeck key={index} caption={card} />
//             ))}
//           </div>
//         </div>
//       )}
//       {/* PLAYER 4 VIEW */}
//       {currentUser === "Player 4" && (
//         <div className="player-view">
//           <h2>{turn}'s turn</h2>
//           <div className="player-hand">
//             {player4Deck.map((card, index) => (
//               <ShuffleDeck
//                 key={index}
//                 caption={card}
//                 onClick={() => handleCardDeck(card)}
//               />
//             ))}
//           </div>
//           <div className="played-cards">
//             {playedcardsDeck.map((card, index) => (
//               <ShuffleDeck key={index} caption={card} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GameLogic;
