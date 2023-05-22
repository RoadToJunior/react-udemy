import "./App.css";
const title = "hello Łerld!";
const stopka = "stopka in here";
const handleClick = () => {
  alert("alercik");
};
//komponent funkcyjny, bezstanowy

const App = () => {
  return (
    <div className="App">
      <h1>{title}</h1>
      <footer onClick={handleClick}>{stopka}</footer>
    </div>
  );
};

//komponent klasowy, stanowy

class App2 extends React.Component {
  render() {
    return (
      <section>
        <h2>Komponent klasowy</h2>
      </section>
    );
  }
}

export default App;
