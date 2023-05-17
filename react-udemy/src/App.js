import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;

const usersAge = [20, 21, 23, 43];
usersAge.forEach((age) =>
  console.log(`W przyszłym roku użytkownik będzie miał ${age + 1} lat.`)
);
