import React, {  } from "react";

// * Components
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3> Data Table </h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Constellation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { 
            data.length === 0 ? (
            <tr>
              <td colSpan="3">No data</td>
            </tr>
            ):(
              data.map(item => (
              <CrudTableRow 
                key={item.id} 
                knight={item} 
                setDataToEdit={setDataToEdit} 
                deleteData={deleteData}
              />
              ))
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default CrudTable;
