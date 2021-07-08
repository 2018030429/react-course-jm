import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/help.http";

// * Components
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

export default function CrudApi() {

  const [db, setDb] = useState<Array<any> | null>([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState<object | null>(null);
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

  const createData = (data:any) => {
    data.id = Date.now();

    let options = { 
      body: data, 
      headers: { "Content-Type": "application/json" }
    };

    api.post(url, options)
    .then(res => {
      if (!res.err) {
        setDb([...db!, res]);
      } else {
        setError(res);
      }
    });
  }

  const updateData = (data:any) => {
    let endpoint = `${ url }/${ data.id }`;

    let options = { 
      body: data, 
      headers: { "Content-Type": "application/json" }
    };

    api.put(endpoint, options)
    .then(res => {
      if (!res.err) {
        let newData = db!.map((item) => item.id === data.id? data: item);
        setDb(newData);
      } else {
        setError(res);
      }
    });
  }

  const deleteData = (id:number) => {
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
            let newData = db!.filter(item => item.id !== id);
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
      <h2> CRUD - API </h2>
      <article className="grid-1-2">
      <CrudForm 
        createData={createData} 
        updateData={updateData} 
        dataToEdit={dataToEdit} 
        setDataToEdit={setDataToEdit}
      />
      { loading && <Loader/> }
      { error && <Message 
        message={`Error something happend`} 
        bgColor="#DC3545"/> }
      { db && <CrudTable 
        data={db} 
        setDataToEdit={setDataToEdit} 
        deleteData={deleteData}
      /> }
      </article>
    </div>
  );
}