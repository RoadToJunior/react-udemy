import React, { useState } from "react";
import "./App.css";

class App extends React.Component {
  state = {};
  handleInputChange(e) {
    console.log(e.target.value)
  }
  render() {
    return (
      <>
        <input onChange={handleInputChange} type="text"></input>
        <button onClick={}>Reset</button>
        <h1 className="title"></h1>
      </>
    );
  }
}

export default App;
