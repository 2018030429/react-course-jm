import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  constellation: "",
  id: null
}

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }:any) => {

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e:any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const hasFormEmptyValues = () => [form.name, form.constellation].includes("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (hasFormEmptyValues()) {
      alert("Incomplete data");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    
    handleReset();
  }


  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  }


  return (
    <div>
      <h3> {dataToEdit? 'UPDATE' : 'ADD'} A KNIGTH </h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" 
          onChange={handleChange} value={form.name}/>
        <input type="text" name="constellation" placeholder="Constellation" 
          onChange={handleChange} value={form.constellation}/>
        <input type="submit" value="Send" />
        <input type="reset" value="Clear" onClick={handleReset}/>
      </form>
    </div>
  );
}

export default CrudForm;
