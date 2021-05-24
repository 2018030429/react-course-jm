import React, { Component, Fragment } from "react";

function EstadoHijo(props) {
  return (
    <Fragment>
      <h3>{ props.contadorHijo }</h3>
    </Fragment>
  );
}

export default class Estado extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    }

    // setInterval(() => {
    //   this.setState({
    //     contador: this.state.contador + 1
    //   })
    // }, 1000);

  }

  render() {
    return(
      <Fragment>
        <h2> The Statement </h2>
        <p>{ this.state.contador }</p>
        <EstadoHijo contadorHijo={ this.state.contador }/>
      </Fragment>
    );
  }

}
