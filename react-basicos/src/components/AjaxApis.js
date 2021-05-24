import React, { Component, Fragment } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={ props.avatar } alt={ props.name }/>
      <figcaption>{ props.name }</figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {

  state = {
    pokemons: []
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then(res => res.json())
      .then(json => {
        json.results.forEach(pokemon => {
          fetch(pokemon.url)
            .then(res => res.json())
            .then(json => {
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default
              };

              let pokemons = [...this.state.pokemons, pokemon];
              this.setState({ pokemons });
            })
        });
      })
  }

  render() {
    return (
      <Fragment>
        <h2> Peticiones Asíncronas en Componentes de Clase </h2>
        { 
          this.state.pokemons.length === 0 
          ? <h3>Loading...</h3> 
          : this.state.pokemons.map(pokemon => <Pokemon key={pokemon.id} name={pokemon.name} avatar={pokemon.avatar}/>) 
        }
        
      </Fragment>
    );
  }

}
