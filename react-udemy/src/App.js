import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;

const users = ["adam", "bogdan", "czarek", "darek"];

const newUser = "edyta";
const allUsers = users.concat(newUser);
console.log(allUsers);
//["adam", "bogdan", "czarek", "darek", "edyta"];
