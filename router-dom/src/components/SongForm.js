import React, { useState } from 'react'

const initialForm = {
  artist: "",
  song: ""
}

const SongForm = ({ handleSearch }) => {

  const [form, setForm] = useState(initialForm);
  
  const hasFormEmptyValues = () => [form.artist, form.song].includes("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (hasFormEmptyValues()) {
      alert("There are empty data");
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input type="text" name="artist" placeholder="Artist name" 
          onChange={ handleChange } value={ form.artist } />
        <input type="text" name="song" placeholder="Song's name" 
          onChange={ handleChange } value={ form.song } />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default SongForm
