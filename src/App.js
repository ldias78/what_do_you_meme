import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "bootstrap";

import { Button, Form, InputGroup } from "react-bootstrap";

const App = () => {
  const [giphy, setGiphy] = useState("");
  const [fetching, setFetching] = useState("false");
  const [prevgiphy, setCurrentGiph] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const apiRoot = "https://api.giphy.com/v1/gifs/";
      const api_key = process.env.REACT_APP_GIPHY_KEY;
      const result = await axios(
        `${apiRoot}trending?api_key=${api_key}&rating=g`
      );
      console.log(result);
      let randomIndex = Math.floor(Math.random() * 50);
      let newGiphy = result.data.data[randomIndex].images.fixed_height.url;
      while (prevgiphy === newGiphy) {
        randomIndex = Math.floor(Math.random() * 50);
        newGiphy = result.data.data[randomIndex].images.fixed_height.url;
      }
      setCurrentGiph(giphy);
      setGiphy(newGiphy);
    };
    fetchData();
  }, [fetching]);
  return (
    <div>
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card style={{ backgroundColor: "powderblue" }}>
              <Card.Img
                variant="top"
                src={giphy}
                style={{ height: "350px", width: "100%" }}
              />
              <Card.Body>
                <Card.Title>What do you Meme?</Card.Title>
                <Card.Text>
                  Pick a card with a caption that match this Meme
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => setFetching(!fetching)}
                >
                  click here to see your next Meme
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

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
