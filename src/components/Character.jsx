import React from "react";

class Character extends React.Component {
  render() {
    return (
      <div className="character">
        <img src={this.props.image} alt="" />
        <h2>{this.props.name}</h2>
        <p>{this.props.title}</p>
        <button
          type="button"
          onClick={() => {
            this.props.onClick(this.props.name);
          }}
        >
          Add to favorites
        </button>
        <br />
      </div>
    );
  }
}

export default Character;
