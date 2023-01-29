import React from "react";
class CardDeck extends React.Component {
  state = {
    total_deck: 25,
  };
  render() {
    return (
      <div className="carddeck">
        <span>{this.state.CardDeck}</span>
      </div>
    );
  }
}

export default CardDeck;
