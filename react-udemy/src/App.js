import React from "react";
import "./App.css";

const handleClick = () => {};

class App extends React.Component {
  render() {
    return (
      <>
        <button onClick={handleClick}>Add "a"</button>
        <p></p>
      </>
    );
  }
}
export default App;
