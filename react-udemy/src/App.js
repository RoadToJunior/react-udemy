import React, { useState } from "react";
import "./App.css";

class App extends React.Component {
  state = {
    text: "",
  };
  handleClick() {
    const number = Math.floor(Math.random() * 10);

    this.setState({
      text: this.state.text + number,
    });
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>Add "a"</button>
        <PanelResault text={this.state.text} />
      </>
    );
  }
}

const PanelResault = (props) => {
  return <h1>{props.text}</h1>;
};
export default App;
