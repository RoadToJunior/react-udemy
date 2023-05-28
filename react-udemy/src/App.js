import React, { useState } from "react";
import "./App.css";

class Counter extends React.Component {
  state = {
    count: 0,
    result: 0,
  };
  render() {
    return (
      <>
        <button>-10</button>
        <button>-1</button>
        <button>Reset</button>
        <button>+1</button>
        <button>+10</button>
      </>
    );
  }
}
export default Counter;
