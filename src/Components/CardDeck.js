import React, { useState, useEffect } from "react";
import CardCaptions from "./CardsCaptions";
import "./carddeck.css";

const CardDeck = () => {
  const [deck, setDeck] = useState(CardCaptions);
  const [chosenCaption, setchosenCaption] = useState(null);
  const [turn, setTurn] = useState("Player 1");
  const [playedcardsDeck, setplayedcardsDeck] = useState([]);
  const [drawcardDeck, setdrawcardDeck] = useState([]);
  const [player1Deck, setPlayer1Deck] = useState([]);
  const [player2Deck, setPlayer2Deck] = useState([]);
  const [player3Deck, setPlayer3Deck] = useState([]);
  const [player4Deck, setPlayer4Deck] = useState([]);

  useEffect(() => {
    const shuffleCards = shuffleArray(CardCaptions);

    const player1Deck = shuffleCards.splice(0, 7);
    setPlayer1Deck(player1Deck);

    const player2Deck = shuffleCards.splice(0, 7);
    setPlayer2Deck(player2Deck);

    const player3Deck = shuffleCards.splice(0, 7);
    setPlayer3Deck(player3Deck);

    const player4Deck = shuffleCards.splice(0, 7);
    setPlayer4Deck(player4Deck);

    const playedcardsDeck = shuffleCards.splice(startingCardIndex, 1);
    setplayedcardsDeck(playedcardsDeck);

    const drawcardDeck = shuffleCards;
    setdrawcardDeck(drawcardDeck);
  }, []);


      useEffect(() => {
        const state = {
          gameOver: false,
          turn: 'Player 1',
          player1Deck: [...player1Deck],
          player2Deck: [...player2Deck],
          player3Deck: [...player2Deck],
          player4Deck: [...player2Deck],
          playedcardsDeck: [...playedcardsDeck],
          drawcardDeck: [...drawcardDeck]
        };
        dispatch(initGameState(state));
      }, []);

      useEffect(() => {
        // Update state when gameOver changes
        gameOver && setGameOver(gameOver)
        turn && setTurn(turn)
        player1Deck && setPlayer1Deck(player1Deck)
        player2Deck && setPlayer2Deck(player2Deck)
        player2Deck && setPlayer2Deck(player2Deck)
        player3Deck && setPlayer3Deck(player2Deck)
        playedcardsDeck && setplayedcardsDeck(playedcardsDeck)
        drawcardDeck && setdrawcardDeck(drawcardDeck)
    }, [gameOver, winner, turn, player1Deck, player2Deck, player3Deck, player4Deck, playedcardsDeck, drawcardDeck])
    
    
    
      const checkGameOver = (arr) => {
        return arr.length === 1
        }

      const handleCardCaption = (card) => {
        setchosenCaption(card);
      };

      const onCardPlayedHandler = (played_card) => {
        //check turn
        //perform switch statement on played card
        //case 1: simple number card
        //extract color and number of played card
        //match with currentColor and currentNumber
        //if matched
        //remove played card from current player's deck and add to playedcardsDeck
        // /set turn to other player
        // /else //invalid move

        const cardPlayedBy = turn;
      
        handleNumberCard(played_card, cardPlayedBy);
        };
      
      const handleNumberCard = (played_card, cardPlayedBy) => {
        const PlayedCard = played_card.charAt(0);
        const otherPlayedCard = played_card.charAt(1);
      
      
      const handleCardPlayedBy = (cardPlayedBy) => {
        if (cardPlayedBy === "Player 1") {
          // ...
      
          setState({
            gameOver: checkGameOver(player1Deck),
            turn: "Player 2",
            playedcardsDeck: [...playedcardsDeck, played_card],
            player1Deck: [...updatedPlayer1Deck],
            drawcardDeck: [...copieddrawcardDeckArray],
          });
        }
      };

  return (
      <div>
        {currentUser === 'Player 1' && (
          <div className="player-view">
            <h2>{turn}'s turn</h2>
            <div className="player-hand">
              {player1Deck.map((card, index) => (
                <Card key={index} caption={card} onClick={() => handleCardCaption(card)} />
              ))}
            </div>
            <div className="played-cards">
              {playedcardsDeck.map((card, index) => (
                <Card key={index} caption={card} />
              ))}
            </div>
          </div>
        )}
        {/* PLAYER 2 VIEW */}
        {currentUser === 'Player 2' && (
          <div className="player-view">
            <h2>{turn}'s turn</h2>
            <div className="player-hand">
              {player2Deck.map((card, index) => (
                <Card key={index} caption={card} onClick={() => handleCardCaption(card)} />
              ))}
            </div>
            <div className="played-cards">
              {playedcardsDeck.map((card, index) => (
                <Card key={index} caption={card} />
              ))}
            </div>
          </div>
        )}
        {/* PLAYER 3 VIEW */}
        {currentUser === 'Player 3' && (
          <div className="player-view">
            <h2>{turn}'s turn</h2>
            <div className="player-hand">
              {player3Deck.map((card, index) => (
                <Card key={index} caption={card} onClick={() => handleCardCaption(card)} />
              ))}
            </div>
            <div className="played-cards">
              {playedcardsDeck.map((card, index) => (
                <Card key={index} caption={card} />
              ))}
            </div>
          </div>
        )}
        {/* PLAYER 4 VIEW */}
        {currentUser === 'Player 4' && (
          <div className="player-view">
            <h2>{turn}'s turn</h2>
            <div className="player-hand">
              {player4Deck.map((card, index) => (
                <Card key={index} caption={card} onClick={() => handleCardCaption(card)} />
              ))}
            </div>
            <div className="played-cards">
              {playedcardsDeck.map((card, index) => (
                <Card key={index} caption={card} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
export default CardDeck;
