import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Henry";
  let auth = true;
  let seasons = ["Spring", "Summer", "Autumn  ", "Winter"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre"/>
        <h1>{ name }</h1>
        <p>{ auth? "You are logged": "Your are not logged" }</p>
        <p>{ 2 + 1 }</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          { seasons.map((el, index) => (
            <li key={index}>{ el }</li>
          )) }
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
