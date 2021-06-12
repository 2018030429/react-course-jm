import React, { useEffect, useState } from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import { helpHttp } from "../helpers/help.http";
import Error404 from "../pages/Error404";

// * Components
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

export default function CrudApi() {

  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  let api = helpHttp();
  let url = "http://localhost:5000/saints";

  useEffect(() => {
    setLoading(true);
    helpHttp().get(url).then(res => {
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = { 
      body: data, 
      headers: { "Content-Type": "application/json" }
    };

    api.post(url, options)
    .then(res => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  }

  const updateData = (data) => {
    let endpoint = `${ url }/${ data.id }`;

    let options = { 
      body: data, 
      headers: { "Content-Type": "application/json" }
    };

    api.put(endpoint, options)
    .then(res => {
      if (!res.err) {
        let newData = db.map((item) => item.id === data.id? data: item);
        setDb(newData);
      } else {
        setError(res);
      }
    });
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Are you sure to delte this knigth with id: ${ id }?`
    );

    let options = { 
      headers: { "Content-Type": "application/json" }
    };

    if (isDelete) {
      let endpoint = `${ url }/${ id }`;
      api.del(endpoint, options)
        .then(res => {
          if (!res.err) {
            let newData = db.filter(item => item.id !== id);
            setDb(newData);
          } else {
            setError(res);
          }
        });
    } else {
      return;
    }
  }

  return (
    <div>
      <HashRouter basename="saints">
        <header>
          <h2> CRUD API - ROUTES </h2>
          <nav>
            <NavLink to="/" activeClassName="active">Saints</NavLink>
            <NavLink to="/add" activeClassName="active">Add</NavLink>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            { loading && <Loader/> }
            { error && <Message 
              message={`Error ${ error.status }: ${ error.statusText }`} 
              bgColor="#DC3545"/> }
            { db && <CrudTable 
              data={db} 
              setDataToEdit={setDataToEdit} 
              deleteData={deleteData}
            /> }
          </Route>
          <Route exact path="/add">
            <CrudForm 
              createData={createData} 
              updateData={updateData} 
              dataToEdit={dataToEdit} 
              setDataToEdit={setDataToEdit} />
          </Route>
          <Route exact path="/edit/:id">
            <CrudForm 
              createData={createData} 
              updateData={updateData} 
              dataToEdit={dataToEdit} 
              setDataToEdit={setDataToEdit} />
          </Route>
          <Route exact path="*" component={Error404} />
        </Switch>
      </HashRouter>
    </div>
  );
}