const Card = ({ quote, onClick, isSelected, player }) => (
  <div className={`cards`} onClick={onClick}>
    <div>{player}</div>
    <div className={`card ${isSelected ? "card-selected" : ""}`}>
      <p>{quote}</p>
    </div>
  </div>
);
export default Card;
