import  React  from "react";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{ props.porDefecto }</h2>
      <ul>
        <li>{ props.cadena }</li>
        <li>{ props.numero }</li>
        <li>{ props.booleano? "true": "false" }</li>
        <li>{ props.arreglo.join(", ") }</li>
        <li>{ JSON.stringify(props.objeto) }</li>
        <li>{ props.reactElement }</li>
        <li>{ props.arreglo.map(props.funcion).join(", ") }</li>
        <li>{ props.reactComponent }</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las Props"
}
