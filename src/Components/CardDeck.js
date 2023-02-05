import React, { useState } from "react";
import CardCaptions from "./CardsCaptions";
import "./carddeck.css";


const CardDeck = () => {
  const [deck, setDeck] = useState(CardCaptions);
  const [chosenCaption, setchosenCaption] = useState(null);
  const [turn, setTurn] = useState("Player 1");
  const [playedcardsPile, setPlayedCardsPile] = useState([]);
  const [drawcardPile, setDrawcardpile] = useState([...drawcardPile]);
  const [player1Deck, setPlayer1Deck] = useState([...player1Deck]);
  const [player2Deck, setPlayer2Deck] = useState([...player2Deck]);
  const [player3Deck, setPlayer3Deck] = useState([...player3Deck]);
  const [player4Deck, setPlayer4Deck] = useState([...player4Deck]);


  useEffect(() => {
    //shuffle PACK_OF_CARDS array
    const shuffledCards = shuffleArray(PACK_OF_CARDS)

    //extract first 7 elements to player1Deck
    const player1Deck = Shuffle.splice(0, 7)

    //extract first 7 elements to player2Deck
    const player2Deck = Shuffle.splice(0, 7)

     //extract first 7 elements to player2Deck
    const player3Deck = Shuffle.splice(0, 7)

      //extract first 7 elements to player2Deck
    const player4Deck = Shuffle.splice(0, 7)

       //extract the card from that startingCardIndex into the playedCardsPile
    const playedCardsPile = Shuffle.splice(startingCardIndex, 1)

       //store all remaining cards into drawCardPile
    const drawCardPile = shuffledCards

      useEffect(() => {
        const state = {
          gameOver: false,
          turn: 'Player 1',
          player1Deck: [...player1Deck],
          player2Deck: [...player2Deck],
          player3Deck: [...player2Deck],
          player4Deck: [...player2Deck],
          playedCardsPile: [...playedCardsPile],
          drawCardPile: [...drawCardPile]
        };
        dispatch(initGameState(state));
      }, []);

      useEffect(() => {
        // Update state when gameOver changes
        gameOver && setGameOver(gameOver)
        gameOver === true && playGameOverSound()
        turn && setTurn(turn)
        player1Deck && setPlayer1Deck(player1Deck)
        player2Deck && setPlayer2Deck(player2Deck)
        player2Deck && setPlayer2Deck(player2Deck)
        player3Deck && setPlayer3Deck(player2Deck)
        playedCardsPile && setPlayedCardsPile(playedCardsPile)
        drawCardPile && setDrawCardPile(drawCardPile)
    }, [gameOver, winner, turn, player1Deck, player2Deck, player3Deck, player4Deck, playedCardsPile, drawCardPile])
    
    
    
    

      const checkGameOver = (arr) => {
        return arr.length === 1
    }

  // const dealCards = () => {
  //   if (deck.length === 0) {
  //     return;
  //   }

  //   const newPlayer = [];
  //   for (let i = 0; i < 7; i++) {
  //     newPlayer.push(deck.pop());
  //   }

  //   setPlayers([...players, newPlayer]);
  // };

  const handleCardCaption = (card) => {
    setchosenCaption(card);
  };

  return (
    <div className="cards">
      <div className="card">
        {deck.map((card, index) => (
          <div key={index} className="card">
            <CardCaptions
              caption={card}
              onClick={() => handleCardCaption(card)}
            />
          </div>
        ))}
      </div>
      <div className="players">
        {players.map((hand, index) => (
          <div key={index} className="player-hand">
            {hand.map((card, index) => (
              <CardCaptions key={index} caption={card} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDeck;
