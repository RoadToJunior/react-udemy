import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;

class Country {
  constructor(name) {
    this.name = name;
    this.showName = () => console.log(this.name);
  }
  showCountryName() {
    console.log(`Nazwa kraju to ${this.name}`);
  }
}

const Poland = new Country("Polska");

Poland.showCountryName(); // Nazwa kraju to Polska
Poland.showName(); // Polska
