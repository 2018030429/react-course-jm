import React, { Fragment, useState } from "react";

export default function Formularios() {

  // const [nombre, setNombre] = useState("");
  // const [sabor, setSabor] = useState("");
  // const [lenguaje, setLenguaje] = useState("");
  // const [terminos, setTerminos] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("El formulario se ha enviado");
  // }

  // return (
  //   <Fragment>
  //     <h2> Formularios </h2>
  //     <form onSubmit={handleSubmit}>
  //       <label htmlFor="nombre"> Nombre: </label>
  //       <input type="text" id="nombre" name="nombre" 
  //             onChange={({target}) => setNombre(target.value)}/>

  //       <p>Elige tu sabor JS favorito:</p>

  //       <input type="radio" id="vanilla" name="sabor" value="vanilla" 
  //             onChange={({target}) => setSabor(target.value)}/>
  //       <label htmlFor="vanilla">Vanilla</label>

  //       <input type="radio" id="react" name="sabor" value="react" 
  //             onChange={({target}) => setSabor(target.value)}/>
  //       <label htmlFor="react">React</label>

  //       <input type="radio" id="angular" name="sabor" value="angular" 
  //             onChange={({target}) => setSabor(target.value)}/>
  //       <label htmlFor="angular">Angular</label>

  //       <input type="radio" id="svelte" name="sabor" value="svelte" 
  //             onChange={({target}) => setSabor(target.value)}/>
  //       <label htmlFor="svelte">Svelte</label>

  //       <input type="radio" id="vue" name="sabor" value="vue" 
  //             onChange={({target}) => setSabor(target.value)}/>
  //       <label htmlFor="vue">Vue</label>

  //       <p> Elige tu lenguaje de programación favorito </p>

  //       <select name="lenguaje" onChange={({target}) => setLenguaje(target.value)}>
  //         <option value="">---</option>
  //         <option value="js">JavaScript</option>
  //         <option value="php">PHP</option>
  //         <option value="py">Python</option>
  //         <option value="go">Go</option>
  //         <option value="rb">Ruby</option>
  //       </select>

  //       <br/>

  //       <input type="checkbox" id="terminos" name="terminos" 
  //             onChange={({target}) => setTerminos(target.checked)}/>
  //       <label htmlFor="terminos">Acepto términos y condiciones</label> <br/>

  //       <input type="submit" defaultValue="Enviar"/>

  //     </form>
  //   </Fragment>
  // );

  const [form, setForm] = useState({});
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleCheckched = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  }

  return (
    <Fragment>
      <h2> Formularios </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre"> Nombre: </label>
        <input type="text" id="nombre" name="nombre" 
              onChange={handleChange}/>

        <p>Elige tu sabor JS favorito:</p>

        <input type="radio" id="vanilla" name="sabor" value="vanilla" 
              onChange={handleChange}/>
        <label htmlFor="vanilla">Vanilla</label>

        <input type="radio" id="react" name="sabor" value="react" 
              onChange={handleChange}/>
        <label htmlFor="react">React</label>

        <input type="radio" id="angular" name="sabor" value="angular" 
              onChange={handleChange}/>
        <label htmlFor="angular">Angular</label>

        <input type="radio" id="svelte" name="sabor" value="svelte" 
              onChange={handleChange}/>
        <label htmlFor="svelte">Svelte</label>

        <input type="radio" id="vue" name="sabor" value="vue" 
              onChange={handleChange}/>
        <label htmlFor="vue">Vue</label>

        <p> Elige tu lenguaje de programación favorito </p>

        <select name="lenguaje" onChange={handleChange}>
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>

        <br/>

        <input type="checkbox" id="terminos" name="terminos" 
              onChange={handleCheckched}/>
        <label htmlFor="terminos">Acepto términos y condiciones</label> <br/>

        <input type="submit" defaultValue="Enviar"/>

      </form>
    </Fragment>
  );
}
