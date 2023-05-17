import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;

const users = ["adam", "bogdan", "czarek", "darek"];

const usersString = users.join(" ");
console.log(usersString);
//["adam bogdan czarek darek"];
// const usersString = users.join("-");
//["adam-bogdan-czarek-darek"]
