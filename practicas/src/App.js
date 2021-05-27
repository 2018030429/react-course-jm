import React, { Fragment } from "react";

import CRUDAPP from "./components/CRUD";
import CrudApi from "./components/CrudApi";

function App() {
  return (
    <Fragment>
      <h2> React Excercises </h2>
      <CrudApi/>
      <hr/>
      <CRUDAPP/>
      <hr/>
    </Fragment>
  );
}

export default App;
