import React, { useState, useEffect, Fragment } from "react";

export default function ScrollHooks() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // console.log("Moviendo el scroll");
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener('scroll', detectarScroll);
  }, [scrollY]);

  useEffect(() => {
    // console.log("Fase de Montaje");
  }, []);

  useEffect(() => {
    return () => {
      // console.log("Fase de Desmontaje");
    }
  });

  return (
    <Fragment>
      <h2> Hooks - useEffect & lifecycle</h2>
      <p> ScrollY del Navegador { scrollY } px </p>
    </Fragment>
  );
}
