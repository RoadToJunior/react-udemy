import React, { useState } from "react";
import "./App.css";

class Counter extends React.Component {
  state = {
    count: 0,
    result: 0,
  };
  handleMathClick(type, number = 1) {
    if (type === "subtraction") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result - number,
      }));
    } else if (type === "reset") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: 0,
      }));
    } else if (type === "addition") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result + number,
      }));
    }
  }

  render() {
    debugger;
    return (
      <>
        <button onClick={this.handleMathClick.bind(this, "subtraction", 10)}>
          -10
        </button>
        <button onClick={() => this.handleMathClick("subtraction")}>-1</button>
        <button onClick={this.handleMathClick.bind(this, "reset")}>
          Reset
        </button>
        <button onClick={() => this.handleMathClick("addition")}>+1</button>
        <button onClick={this.handleMathClick.bind(this, "addition", 10)}>
          +10
        </button>
        <h1>Liczba kliknięć: {this.state.count} </h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}
export default Counter;
