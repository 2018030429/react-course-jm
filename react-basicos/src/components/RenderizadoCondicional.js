import React, { Component, Fragment } from "react";

function Login() {
  return(
    <Fragment>
      <h3> Login </h3>
    </Fragment>
  );    
}

function Logout() {
  return(
    <Fragment>
      <h3> Logout </h3>
    </Fragment>
  );    
}

export default class RenderizadoCondicional extends Component {

  constructor(props) {
    super(props);
    this.state = {
      session: false
    }
  }

  render() {
    return (
      <Fragment>
        <h2> Renderizado Condicional </h2>
        { this.state.session ? <Logout/> : <Login/> }
      </Fragment>
    );
  }

}
