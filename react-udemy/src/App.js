import React, { useState } from "react";
import "./App.css";

class App extends React.Component {
  state = {
    text: "",
  };
  handleClick = () => {
    this.useState({
      text:
    });
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick}>Add "a"</button>
        <p>{this.state.text}</p>
      </>
    );
  }
}
export default App;
