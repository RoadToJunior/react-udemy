import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;

const customers = [
  { name: "Adam", age: 67 },
  { name: "Basia", age: 27 },
  { name: "Marta", age: 17 },
];

const isUserAdult = customers.findIndex((customer) => customer.age < 18);
console.log(isUserAdult);
//2
