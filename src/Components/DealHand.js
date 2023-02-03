import React from "react";

const DealHand = ({ content, answer, id }) => {
  return (
    <div
      className={`card ${answer ? "card--answer" : ""} ${
        id ? `card--${id}` : ""
      }`}
    >
      <div className="card__content">{content}</div>
      <footer className="card__footer">
        {answer ? (
          <img src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Small.png" />
        ) : (
          <img src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-White-Small.png" />
        )}
        <span>Cards Against Developers</span>
      </footer>
    </div>
  );
};

// const HandleRadio = () => {
//   const [checked, setChecked] = React.useState(true);

//   return (
//     <div>
//       <input type="radio" name="choice" id="spaces" checked={checked} onChange={() => setChecked(true)} />
//       <input type="radio" name="choice" id="tabs" checked={!checked} onChange={() => setChecked(false)} />
//       <label htmlFor="tabs">Tabs</label>
//       <label htmlFor="spaces">Spaces</label>
//       <Card content="Tabs" answer id="tabs" />
//       <Card content="Spaces" answer id="spaces" />
//     </div>
//   );
// };

export default DealHand;

//   const [isFlipped, setIsFlipped] = useState(false);

//     <div style={styles.cardContainer} onClick={() => setIsFlipped(!isFlipped)}>
//       <img
//         src={isFlipped ? backCard : frontCard}
//         alt="card"
//         style={styles.cardImage}
//       />
//     </div>
//   );
// };

// export default HandleCard;
