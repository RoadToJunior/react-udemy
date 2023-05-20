import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;

class Person {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log(`Imię osoby to${this.name}`);
  }
}

class Student extends Person {
  constructor(name = "", degrees = []) {
    super(name);
    this.degrees = degrees;
  }
}
