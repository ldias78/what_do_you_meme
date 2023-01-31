import Card from "react-bootstrap/Card";
import CardCaption from "./src/CardsCaptionsDeck.js";

const Cards = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text>{props.CardCaption}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;

// import React, { useState } from "react";
// import { useEffect } from "react";
// // import "./App.css";
// // import BoardForm from "./components/BoardForm";
// // import BoardList from "./components/BoardList";

// const Card = (props) => {
//   const buttonHandler = (event) => {
//     if (event.target.name === "likeCard") {
//       console.log("likeCard");
//       props.likeSetter(props.id);
//     }
//     if (event.target.name === "deleteCard") {
//       console.log("deleteCard");
//       props.deleteSetter(props.id);
//     }
//   };

//   return (
//     <div className="card">
//       <div className="card-main">
//         <div className="card-message "> {props.message}</div>
//       </div>
//       <div className="bottom">
//         <input
//           className="button"
//           name="likeCard"
//           type="button"
//           onClick={buttonHandler}
//           value={` ${props.likes} likes`}
//         ></input>
//         <input
//           className="button"
//           name="deleteCard"
//           type="button"
//           onClick={buttonHandler}
//           value="Delete"
//         ></input>
//       </div>
//     </div>
//   );
// };

// export default Card;
