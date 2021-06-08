import React, { Fragment } from "react";

import CRUDAPP from "./components/CRUD";
import CrudApi from "./components/CrudApi";
import SelectsAnidados from "./components/SelectsAnidados";
import SongSearch  from "./components/SongSearch";
import ContactForm from "./components/ContactForm";
import Modals from "./components/Modals";

function App() {
  return (
    <Fragment>
      <h1> React Excercises </h1>
      <Modals/>
      <hr/>
      <ContactForm/>
      <hr/>
      <SelectsAnidados/>
      <hr/>
      <SongSearch/>
      <hr/>
      <CrudApi/>
      <hr/>
      <CRUDAPP/>
      <hr/>
    </Fragment>
  );
}

export default App;
