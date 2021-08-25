import React from "react";
import Character from "./components/Character";
import TabButton from "./components/TabButton";
import Continent from "./components/Continent";
import "./App.css";

const characterPerso = {
  id: "0",
  firstName: "Arya",
  lastName: "Stark",
  fullName: "Arya Stark",
  title: "No One",
  family: "House Stark",
  image: "arya-stark.jpg",
  imageUrl: "https://thronesapi.com/assets/images/arya-stark.jpg",
};

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
    if (!this.state.favorites.includes(char)) {
      this.setState({ favorites: [...this.state.favorites, char] });
    } else {
      const favorites = this.state.favorites.slice();
      favorites.splice(favorites.indexOf(char), 1);
      this.setState({ favorites: favorites });
    }
  };

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((result) => result.json())
      .then((result) => this.setState({ characters: result }));

    fetch("https://thronesapi.com/api/v2/Continents")
      .then((result) => result.json())
      .then((result) => this.setState({ continent: result }));

    fetch("/echo/json/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      method: "POST",
      body: JSON.stringify(characterPerso),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
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
                favorites={this.state.favorites}
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
          return <Continent name={elem.name} key={elem.id} />;
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
