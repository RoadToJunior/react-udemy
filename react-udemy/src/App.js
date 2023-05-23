import React, { useState } from "react";
import "./App.css";

class App extends React.Component {
  state = {
    text: "",
  };
  handleClick = () => {
    this.setState({
      text: this.state.text + "a",
    });
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick}>Add "a"</button>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}
export default App;
