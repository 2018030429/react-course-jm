import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/help.http";

// * Components
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

export default function CrudApi() {

  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  
  let api = helpHttp();
  let url = "http://localhost:5000/saints";

  useEffect(() => {
    api.get(url).then(res => {
      if (!res.err) {
        setDb(res);
      }
    });
  }, []);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  }

  const updateData = (data) => {
    let newData = db.map((item) => item.id === data.id? data: item);
    setDb(newData);
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Are you sure to delte this knigth with id: ${ id }?`
    );

    if (isDelete) {
      let newData = db.filter(item => item.id !== id);
      setDb(newData);
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
      <CrudTable 
        data={db} 
        setDataToEdit={setDataToEdit} 
        deleteData={deleteData}
      />
      </article>
    </div>
  );
}