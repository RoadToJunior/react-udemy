import React, { useState } from "react";
import "./App.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false,
    };
  }

  handleClick() {
    this.setState({
      messageIsActive: true,
    });
  }

  render() {
    const text =
      "lorem ipsum dolor sit amet cons adici elit. Ateier mnet volus temporus sccotns moetase cisic visa";

    return (
      <>
        <button onClick={this.handleClick}>Click</button>
        <p>{text}</p>
      </>
    );
  }
}

export default Message;
