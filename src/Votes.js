import React from "react";

class Votes extends React.Component {
  Bestcaption = {
    count: 0,
  };

  CountVote = () => {
    console.log("hi from countvote");
    this.setState((prevState) => {
      return {
        count: prevState.count * 1,
      };
    });
  };
  render() {
    return (
      <div className="Votebutton">
        <span className="votes">{this.state.Votes}</span>
        <button className="Buttonvote" onClick={this.Votes}>
          Vote for Best Card
        </button>
      </div>
    );
  }
}

export default Votes;
