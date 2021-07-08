import React, {  } from "react";

const CrudTableRow = ({ knight, setDataToEdit, deleteData }:any) => {

  const { name, constellation, id } = knight;

  return (
    <tr>
      <td>{ name }</td>
      <td>{ constellation }</td>
      <td>
        <button onClick={() => setDataToEdit(knight)}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
}

export default CrudTableRow;
