import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;

const users = ["adam", "bogdan", "czarek", "darek"];

const usersFirstLetterUpperCase = users.map((user) => user[0].toUpperCase());
console.log(usersFirstLetterUpperCase);
//["A", "B", "C", "D"];
