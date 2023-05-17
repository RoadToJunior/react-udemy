import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;

const usersAge = [20, 21, 23, 43];
let usersTotalAge = 0;
usersAge.forEach((age) => (usersTotalAge += age));
console.log(usersTotalAge);
//107
