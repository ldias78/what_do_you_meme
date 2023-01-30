import React from "react";
import Card from "src/Card.js";

const CardDeck = () => {
  const [totaldeck, setTotaldeck] = (React.useState = React.useState(25));

  const shuffledeck = () => {
    setTotaldeck((prevTotal) => prevTotal - 7);
    console.log("hi from deck");
    this.setState((prevState) => {
      return {
        Totaldeck: prevState.Totaldeck * 7,
      };
    });
  };

  return (
    <div className="carddeck">
      <Card />
      <span className="deck">totaldeck</span>
      <button className="shuffle" onClick={this.shuffledeck}>
        Shuffle Button
      </button>
    </div>
  );
};

export default CardDeck;
