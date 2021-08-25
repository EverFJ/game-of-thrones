import React from "react";
import Character from "./components/Character";
import TabButton from "./components/TabButton";
import Continent from "./components/Continent";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      continent: [],
      favorites: [],
      activeTab: "Characters",
    };
  }
  handleButtonClick = (e) => {
    this.setState({ activeTab: e.target.innerText });
  };

  handleFavoriteClick = (char) => {
    this.setState({ favorites: [...this.state.favorites, char] });
  };

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((result) => result.json())
      .then((result) => this.setState({ characters: result }));

    fetch("https://thronesapi.com/api/v2/Continents")
      .then((result) => result.json())
      .then((result) => this.setState({ continent: result }));
  }

  render() {
    // console.log("characters", this.state.characters);
    // console.log("continent", this.state.continent);

    const characters = (
      <>
        <p className="favorites">
          Favorite characters : {this.state.favorites.join(", ")}
        </p>
        <div className="grid">
          {this.state.characters.map((elem) => {
            return (
              <Character
                name={elem.fullName}
                key={elem.id}
                title={elem.title}
                image={elem.imageUrl}
                onClick={this.handleFavoriteClick}
              />
            );
          })}
        </div>
      </>
    );

    const continent = (
      <>
        {this.state.continent.map((elem) => {
          return <Continent name={elem.name} />;
        })}
      </>
    );

    return (
      <>
        <h1>Game of thrones</h1>
        <TabButton
          onClick={this.handleButtonClick}
          isSelected={this.state.activeTab}
        >
          Characters
        </TabButton>
        <TabButton
          onClick={this.handleButtonClick}
          isSelected={this.state.activeTab}
        >
          Continent
        </TabButton>

        {this.state.activeTab === "Characters" && characters}
        {this.state.activeTab === "Continent" && continent}
      </>
    );
  }
}

export default App;
