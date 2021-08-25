import React from "react";

class Character extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.favorites.includes(this.props.name)
            ? "character-favorite"
            : "character"
        }
      >
        <img src={this.props.image} alt="" />
        <h2>{this.props.name}</h2>
        <p>{this.props.title}</p>
        <button
          className={
            this.props.favorites.includes(this.props.name) ? "remove" : "add"
          }
          type="button"
          onClick={() => {
            this.props.onClick(this.props.name);
          }}
        >
          {this.props.favorites.includes(this.props.name)
            ? "Remove from favorites"
            : "Add to favorites"}
        </button>
        <br />
      </div>
    );
  }
}

export default Character;
