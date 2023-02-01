import React, { useState } from "react";

const Votes = () => {
  const [count, setCount] = useState(0);

  const handleVote = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="Votebutton">
      <span className="votes">{count}</span>
      <button className="Buttonvote" onClick={handleVote}>
        Vote for Best Card
      </button>
    </div>
  );
};

export default Votes;
