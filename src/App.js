import React from "react";
import Character from "./components/Character";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      favorites: [],
    };
  }

  handleFavoriteClick = (char) => {
    this.setState({ favorites: [...this.state.favorites, char] });
  };

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((result) => result.json())
      .then((result) => this.setState({ characters: result }));
  }

  render() {
    console.log("characters", this.state.characters);
    return (
      <>
        <h1>Game of thrones</h1>
        {this.state.characters.map((elem) => {
          return (
            <Character
              name={elem.fullName}
              title={elem.title}
              image={elem.imageUrl}
            />
          );
        })}
      </>
    );
  }
}

export default App;
