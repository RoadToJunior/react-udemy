import React from "react";
import "./App.css";

const title = "hello Łerld!";
const stopka = "stopka in here";
const handleClick = () => {
  alert("alercik");
};
//komponent funkcyjny, bezstanowy

const Header = () => {
  return (
    <div className="App">
      <h1>{title}</h1>
      <footer onClick={handleClick}>{stopka}</footer>
    </div>
  );
};

//komponent klasowy, stanowy

class Blog extends React.Component {
  state = {
    number: 1,
  };
  render() {
    return (
      <section>
        <h2>Artykuł nr {this.state.number}</h2>
        <p>lorem ipseum</p>
      </section>
    );
  }
}

const App = () => {
  return (
    <>
      <Header />
      <Blog />
    </>
  );
};

export default App;
