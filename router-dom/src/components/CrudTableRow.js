import React, {  } from "react";
import { useHistory } from "react-router-dom";

const CrudTableRow = ({ knight, setDataToEdit, deleteData }) => {

  const { name, constellation, id } = knight;

  const history = useHistory();

  const handleEdit = () => {
    setDataToEdit(knight);
    history.push(`/edit/${id}`);
  }

  return (
    <tr>
      <td>{ name }</td>
      <td>{ constellation }</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
}

export default CrudTableRow;
