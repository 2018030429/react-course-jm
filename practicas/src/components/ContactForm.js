import React from 'react'
import { useForm } from '../hooks/useForm'

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: ""
};

const validationsForm = (form) => {
  let errors = {};
  
  if (!form.name.trim()) {
    errors.name = "'name' is required";
  }
  

  return errors;
} 

let styles = {
  fontWeight: "bold",
  fontSize: "12px",
  color: "#DC3545"
}

const ContactForm = () => {

  const { 
    form, 
    errors, 
    loading, 
    response, 
    handleBlur, 
    handleChange, 
    handleSubmit 
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2> Contact Form </h2>
      <form onSubmit={ handleSubmit }>
        <input 
          type="text" 
          name="name" 
          placeholder="Albert Smith" 
          onChange={ handleChange } 
          onBlur={ handleBlur } 
          value={ form.name } 
          required 
          />

        { errors.name && <p style={ styles }>{ errors.name }</p> }

        <input 
          type="email" 
          name="email" 
          placeholder="albert@example.com" 
          onChange={ handleChange } 
          onBlur={ handleBlur } 
          value={ form.email } 
          required 
          />

        { errors.email && <p style={ styles }>{ errors.email }</p> }

        <input 
          type="text" 
          name="subject" 
          placeholder="Subject" 
          onChange={ handleChange } 
          onBlur={ handleBlur } 
          value={ form.subject } 
          required 
          />

        { errors.subject && <p style={ styles }>{ errors.subject }</p> }

        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Write a comment..."
          onChange={ handleChange } 
          onBlur={ handleBlur } 
          value={ form.comments } 
          required>
        </textarea>

        { errors.comments && <p style={ styles }>{ errors.comments }</p> }

        <input 
          type="submit"
          value="Send"
          />
      </form>
    </div>
  )
}

export default ContactForm
