import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;

const users = ["adam", "bogdan", "czarek", "darek"];

const nameWithSixLetters = users.filter((user) => user.length === 6);
console.log(nameWithSixLetters);
//["bogdan", "czarek"];
