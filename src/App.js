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
    // console.log("characters", this.state.characters);
    // console.log("favorites", this.state.favorites);
    return (
      <>
        <h1>Game of thrones</h1>
        <p className="favorites">
          Favorite characters : {this.state.favorites.join(", ")}
        </p>

        {this.state.characters.map((elem) => {
          return (
            <div className="grid">
              <Character
                name={elem.fullName}
                key={elem.id}
                title={elem.title}
                image={elem.imageUrl}
                onClick={this.handleFavoriteClick}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default App;
