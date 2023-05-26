import React, { useState } from "react";
import "./App.css";

class App extends React.Component {
  state = {
    buttonName: ""
  };

  const mainPanel = () => {
    render() {
      return (
        <>
          <button>{this.state.buttonName}</button>
        </>
      )
    }
  };
}

export default App;
