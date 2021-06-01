import React, { Fragment } from 'react'

import { useFetch } from "../hooks/useFetch";

import Loader from "./Loader";
import Message from "./Message";

const mapTranslator = {
  states: "estado",
  towns: "municipios",
  suburbs: "colonia"
}

const SelectList = ({ title, url, handleChange }) => {

  const { data, error, loading } = useFetch(url);

  if (!data) return null;
  if (error) {
    return <Message 
      message={`Error ${ error.status }: ${ error.statusText }`} 
      bgColor="#DC3545"/>
  }

  let id = `select-${ title }`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[mapTranslator[title]];

  return (
    <Fragment>
      <label htmlFor={id}>{ label }</label>
      { loading && <Loader/> }
      <select name={id} id={id} onChange={ handleChange }>
        <option> Select { title.slice(0,-1) } </option>
        { data && (
          options.map(item => <option key={item} value={item}>{ item }</option>)
        )}
      </select>
    </Fragment>
  )
}

export default SelectList
