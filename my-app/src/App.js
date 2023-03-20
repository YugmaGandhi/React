import './App.css';

function App() {
  let x = false;
  return (
    <div className="App">
    <h1>Hello from react</h1>
    <h2>hello {x? "yes" : "No"}</h2>
    </div>
  );
}

export default App;
