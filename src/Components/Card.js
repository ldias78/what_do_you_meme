const Card = ({ quote, onClick, isSelected, player }) => (
  <div className={`cards`} onClick={onClick}>
    <div>{player}</div>
    <div className={`card ${isSelected ? "card-selected" : ""}`}>
      <p style={{ fontFamily: "Comic Sans MS, sans-serif", fontSize: "1em" }}>
        {quote}
      </p>
    </div>
  </div>
);

export default Card;
