import React from "react";
import { StyledComponent } from "styled-components";

class Character extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.image} alt="" />
        <h2>{this.props.name}</h2>
        <p>{this.props.title}</p>
      </>
    );
  }
}

export default Character;
