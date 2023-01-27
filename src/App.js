import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "bootstrap";

import { Button, Form, InputGroup } from "react-bootstrap";

const GiphyApi = () => {
  const [gifs, setGifs] = useState([]);
  const [displayedGifs, setDisplayedGifs] = useState(new Set());

  useEffect(() => {
    const fetchGifs = async () => {
      const response = await axios({
        method: "get",
        url: `${apiRoot}trending`,
        params: {
          api_key: api_key,
          rating: "g",
        },
      });
      const data = await response.data;
      const newGifs = data.data.filter((gif) => !displayedGifs.has(gif.id));
      setGifs([...gifs, ...newGifs]);
      setDisplayedGifs(
        new Set([...displayedGifs, ...newGifs.map((gif) => gif.id)])
      );
    };

    fetchGifs();
  }, []);

  return (
    <div>
      {gifs.map((gif) => (
        <img key={gif.id} src={gif.images.original.url} alt={gif.title} />
      ))}
    </div>
  );
};

export default GiphyApi;

// return (
//   <div className="welcome-screen">
//     <InputGroup className="player-name">
//       <InputGroup.Text> What's your name? </InputGroup.Text>
//       <Form.Control aria-label="Name" />
//     </InputGroup>

//     <Button> Test Button </Button>
//     <Button> Test Button 2 </Button>
//   </div>

// function BasicExample() {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Meme</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Next</Button>
//       </Card.Body>
//     </Card>
//   );
// }
