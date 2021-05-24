import React, { Component, Fragment } from "react";
import { frameworks } from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <Fragment>
      <li>
        <a href={props.frame.web} target="_blank" rel="noreferrer">
          { props.frame.name }
        </a>
      </li>
    </Fragment>
  );
}

export default class RenderizadoElementos extends Component {

  constructor (props) {
    super(props);
    this.state = {
      seasons: [
        "Spring", 
        "Summer", 
        "Autumn", 
        "Winter"
      ]
    }
  }

  render() {
    return (
      <Fragment>
        <h2> Renderizado de Elementos </h2>
        <h3> Estaciones del año </h3>
        <ol>
          {
            this.state.seasons.map(season => (
              <li key={season}>{ season }</li>
            ))
          }
        </ol>
        <h3> Frameworks Frontend JavaScript </h3>
        <ul>
          {
            frameworks.map(frame => (
              <ElementoLista 
                key={ frame.id } frame={ frame }/>
            ))
          }
        </ul>
      </Fragment>
    );
  }

}