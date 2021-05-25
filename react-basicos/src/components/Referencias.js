import React, { Fragment, useRef } from "react";

export default function Referencias() {
  
  let refMenuBtn = useRef(),
    refMenu = useRef();

  const handleToggleMenu = (e) => {
    if (refMenuBtn.current.textContent === 'Menú') {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  }

  return (
    <Fragment>
      <h2> Referencias </h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}> Menú </button>
      <nav id="menu" ref={refMenu} style={{display:"none"}}>
        <a href="1">Sección 1</a> <br/>
        <a href="2">Sección 2</a> <br/>
        <a href="3">Sección 3</a> <br/>
        <a href="4">Sección 4</a> <br/>
        <a href="5">Sección 5</a> <br/>
      </nav>
    </Fragment>
  );
}
