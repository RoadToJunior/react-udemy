import React, { useState } from "react";
import "./App.css";

class App extends React.Component {
  state = {
    value: "",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <>
        <input
          value={this.state.value}
          placeholder="HIT A KEYBOARD"
          onChange={this.handleInputChange}
          type="text"
        ></input>
        {/* <button onClick={}>Reset</button> */}
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </>
    );
  }
}

export default App;
