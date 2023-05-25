import React, { useState } from "react";
import "./App.css";

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <input type="text"></input>
        <button>Reset</button>
        <h1 className="title"></h1>
      </>
    );
  }
}

export default App;
