import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;

const users = ["adam", "bogdan", "czarek", "darek"];

const usersFirstLetterUpperCase = users.map((user) => user[0].toUpperCase());
console.log(usersFirstLetterUpperCase);
//["A", "B", "C", "D"];

const numbers = [2, 4, 6];
const doubleNumbers = numbers.map(number * 2);
console.log(doubleNumbers);
//[4, 8, 12];
