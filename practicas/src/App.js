import React, { Fragment } from "react";

import CRUDAPP from "./components/CRUD";
import CrudApi from "./components/CrudApi";
import SongSearch  from "./components/SongSearch";

function App() {
  return (
    <Fragment>
      <h1> React Excercises </h1>
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
