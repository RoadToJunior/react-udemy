import React, { useState } from "react";
import "./App.css";

class Counter extends React.Component {
  state = {
    count: 0,
    result: 0,
  };
  handleMathClick(type, number = 1) {
    if (type === "subtraction") {
      this.setState({
        count: this.state.count + 1,
        result: this.state.result - number,
      });
    }
  }

  render() {
    return (
      <>
        <button onClick={this.handleMathClick.bind(this, "subtraction", 10)}>
          -10
        </button>
        <button>-1</button>
        <button>Reset</button>
        <button>+1</button>
        <button>+10</button>
        <h1>Liczba kliknięć: {this.state.count} </h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}
export default Counter;
