import React, { useState } from "react";
import "./App.css";

class App extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.value}
          placeholder="HIT A KEYBOARD"
          onChange={this.handleChange}
          type="text"
        ></input>
        <button onClick={this.handleClick}>Reset</button>
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </>
    );
  }
}

export default App;
