import React from "react";
import "./Estilos.css"
import "./Estilos.scss"
import moduleStyle from "./Estilos.module.css"


export default function Estilos() {
  let myStyle = { borderRadius: ".5rem", margin: "1rem", maxWidth: "50%" }
  return (
    <section className="estilos">
      <h2> Estilos en React </h2>

      <h3 className="bg-react"> Estilos en CSS externas </h3>

      <h3 className="bg-react" style={{ borderRadius: ".25rem", margin: "1rem" }}>
        Estilos en línea (style)
      </h3>

      <h3 className="bg-react" style={ myStyle }>
        Estilos en línea 
      </h3>

      <h3 className="bg-react">
        Importando Normalize
        <br/>
        <code>@import-normalize;</code>
      </h3>

      <h3 className={ moduleStyle.error }>Estilos con modulos</h3>
      <h3 className={ moduleStyle.success }>Estilos con modulos</h3>

      <h3 className="bg-sass"> Estilos con SCSS </h3>

    </section>
  );
};
