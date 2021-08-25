import React from "react";

class TabButton extends React.Component {
  render() {
    return (
      <button
        className={
          this.props.isSelected === this.props.children
            ? "selected"
            : "not-selected"
        }
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default TabButton;
