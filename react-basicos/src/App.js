import logo from './logo.svg';
import './App.css';

import Componente from "./components/Component";
import Propiedades from "./components/Propiedades";

function App() {
  let name = "Henry";
  let auth = true;
  let seasons = ["Spring", "Summer", "Autumn  ", "Winter"];
  return (
    <>
      <section>
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
      </section>
      <section>
          <Componente message="Hey! I am here, the message is from props"/>
          <hr/>
          <Propiedades
            cadena="This is a string"
            numero={ 21 }
            booleano={ true }
            arreglo={ [1,2,3] }
            objeto={{ nombre: 'Enrique', edad: 21 }}
            reactElement={<i> Hello </i>}
            funcion={num => num * num}
            reactComponent={ <Componente message="I am a component"/> }
          />
      </section>
    </>
  );
}

export default App;
