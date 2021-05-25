import React, { useState, useEffect, Fragment } from "react";

function PoKemon({ avatar, name }) {
  return (
    <figure>
      <img src={ avatar } alt={ name }/>
      <figcaption>{ name }</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async (url) => {
      let res = await fetch(url),
        json = await res.json();

      json.results.forEach(async poke => {
        let res = await fetch(poke.url),
          json = await res.json();
          
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default
        };
        setPokemons(pokemons => [...pokemons, pokemon]); 
      });
    })("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <Fragment>
      <h2> Peticiones AJAX en Hooks </h2>
      {
        pokemons.length === 0
          ? (<h2> Loading... </h2>)
          : (pokemons.map(({ id, avatar, name }) => (<PoKemon key={ id } avatar={ avatar } name={ name }/>)))
      }
    </Fragment>
  );
}
