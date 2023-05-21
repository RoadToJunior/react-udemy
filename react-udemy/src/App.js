import "./App.css";

const title = "Hello Łerld!";
const stopka = "stopka!";
const handleClick = () => alert("klikłę");

function App() {
  return (
    <div className="App">
      <h1>{title}</h1>
      <footer onClick={handleClick}>{stopka}</footer>
    </div>
  );
}

export default App;
