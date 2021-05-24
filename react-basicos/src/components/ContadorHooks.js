import React, { Fragment, useState } from "react";

export default function ContadorHooks(props) {

  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <Fragment>
      <h2> Hooks - useState </h2>
      <p> Contador de { props.title } </p>
      <nav>
        <button onClick={ sumar }> + </button>
        <button onClick={ restar }> - </button>
      </nav>
      <h3>{ contador }</h3>
    </Fragment>
  );
}

ContadorHooks.defaultProps = {
  title: 'clicks'
}
