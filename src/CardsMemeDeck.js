import React from "react";
import Card from "src/Card.js";

class CardDeck extends React.Component {
  state = {
    Totaldeck: 25,
  };

  shuffledeck = () => {
    console.log("hi from deck");
    this.setState((prevState) => {
      return {
        Totaldeck: prevState.Totaldeck * 7,
      };
    });
  };
  render() {
    return (
      <div className="carddeck">
        <Card />
        <span className="deck">{this.state.Totaldeck}</span>
        <button className="shuffle" onClick={this.shuffledeck}>
          Shuffle Button
        </button>
      </div>
    );
  }
}

export default CardDeck;
