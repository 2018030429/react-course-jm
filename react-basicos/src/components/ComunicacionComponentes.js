import React, { Component, Fragment } from "react";

function Hijo({ message, incrementarContador }) {
  return (
    <Fragment>
      <h3>{ message }</h3>
      <button onClick={ incrementarContador }> + </button>
    </Fragment>
  );
}

export default class Padre extends Component {

  state = {
    contador: 0
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1
    });
    console.log(this.state.contador);
  }

  render() {
    return (
      <Fragment>
        <p> Contador: <b>{ this.state.contador }</b> </p>
        <h2> Comunicación entre componentes </h2>
        <Hijo incrementarContador={this.incrementarContador} 
              message="Mensaje para el hijo 1"/>
        <Hijo incrementarContador={this.incrementarContador} 
              message="Mensaje para el hijo 2"/>
      </Fragment>
    );
  }
}

