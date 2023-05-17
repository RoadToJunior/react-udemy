import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;

const users = ["adam", "bogdan", "czarek", "darek"];

const nameWithLetterK = users.filter((user) => user.indexOf("k") > -1);

// ["czarek", "darek"];
