import React, { useState } from "react";

const CardDeck = () => {
  const cardList = [
    "Card 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Card 2: Sed euismod, risus id malesuada faucibus.",
    // ... more card phrases here
    "Card 200: Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  ];

  const [cards, setCards] = useState([]);

  const handleSelectCards = () => {
    let selectedCards = [];
    while (selectedCards.length < 7) {
      let randomIndex = Math.floor(Math.random() * cardList.length);
      let selectedCard = cardList[randomIndex];
      if (selectedCards.indexOf(selectedCard) === -1) {
        selectedCards.push(selectedCard);
      }
    }
    setCards(selectedCards);
  };

  return (
    <div>
      <button onClick={handleSelectCards}>Select 7 Random Cards</button>
      <div>
        {cards.map((card, index) => {
          return (
            <div key={index}>
              <p>{card.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardDeck;
