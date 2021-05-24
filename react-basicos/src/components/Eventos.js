import React, { Component, Fragment } from "react";

export class EventosES6 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    console.log('Sumando...');
    this.setState({
      contador: this.state.contador + 1
    });
  }

  restar() {
    console.log('Restando...');
    this.setState({
      contador: this.state.contador - 1
    });
  }

  render() {
    return (
      <Fragment>
        <h2> Eventos de Clase ES6 </h2>
        <nav>
          <button onClick={ this.sumar }> + </button>
          <button onClick={ this.restar }> - </button>
        </nav>
        <h3> { this.state.contador } </h3>
      </Fragment>
    );
  }

}

// * Properties Initializer
export class EventosES7 extends Component {

  state = {
    contador: 0
  }

  sumar = () => {
    console.log('Sumando...');
    this.setState({
      contador: this.state.contador + 1
    });
  }

  restar = () => {
    console.log('Restando...');
    this.setState({
      contador: this.state.contador - 1
    });
  }

  render() {
    return (
      <Fragment>
        <h2> Eventos de Clase ES7</h2>
        <nav>
          <button onClick={ this.sumar }> + </button>
          <button onClick={ this.restar }> - </button>
        </nav>
        <h3> { this.state.contador } </h3>
      </Fragment>
    );
  }

}

const Boton = ({ myOnClick }) => (
  <button onClick={ myOnClick }>Button hecho componente</button>
)

export class MasSobreEventos extends Component {

  handleClick = (e, message) => {
    console.log(e);
    console.log(message);
  }

  render() {
    return (
      <Fragment>
        <h2> Mas Sobre Eventos </h2>
        <button onClick={(e) => this.handleClick(e, 'Hello Henry')}> Saludar </button>
        {/* Evento Personalizado */}
        <Boton myOnClick={(e) => this.handleClick(e, 'Hello Henry')}/>
      </Fragment>
    );
  }

}
