import React,{ useState } from 'react'

import SelectList from './SelectList'

const SelectsAnidados = () => {

  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  const TOKEN = "a8d4c2c4-cd9c-4ea8-aa15-94591ae7a7e8";

  return (
    <div>
      <h2> Selects Anidados </h2>
      <h3> México </h3>

      <SelectList 
        title="states" 
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}   
        handleChange={(e) => { setState(e.target.value) }} />

      { state && (
        <SelectList 
          title="towns" 
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={(e) => {setTown(e.target.value)}} />
      )}

      { town && (
        <SelectList 
          title="suburbs" 
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`} 
          handleChange={(e) => {setSuburb(e.target.value)}} />
      )}
      
      <pre>
        <code>
          { state } - { town } - { suburb }
        </code>
      </pre>
    </div>
  )
}

export default SelectsAnidados
