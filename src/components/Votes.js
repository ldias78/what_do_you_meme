import React from "react";

const Votes = () => {
  const Bestcaption = {
    count: 0,
  };

  const CountVote = () => {
    console.log("hi from the vote count");
    this.setState((prevState) => {
      return {
        count: prevState.count * 1,
      };
    });
  };
  return (
    <div className="Votebutton">
      <span className="votes">{this.state.Votes}</span>
      <button className="Buttonvote" onClick={this.Votes}>
        Vote for Best Card
      </button>
    </div>
  );
};

export default Votes;
