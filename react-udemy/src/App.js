import React, { useState } from "react";
import "./App.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      messageIsActive: !this.state.messageIsActive,
    });
  }

  render() {
    const text =
      "lorem ipsum dolor sit amet cons adici elit. Ateier mnet volus temporus sccotns moetase cisic visa lorem ipsum dolor sit amet cons adici elit. Ateier mnet volus temporus sccotns moetase cisic visa lorem ipsum dolor sit amet cons adici elit. Ateier mnet volus temporus sccotns moetase cisic visa";

    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.messageIsActive ? "Ukryj" : "Pokaż"}
        </button>
        {this.state.messageIsActive ? <p>{text}</p> : null}
      </>
    );
  }
}

export default Message;
