import "./App.css";

//komponent funkcyjny, bezstanowy

const App = () => {
  return (
    <div className="App">
      <h1>{title}</h1>
      <footer onClick={handleClick}>{stopka}</footer>
    </div>
  );
};

export default App;
