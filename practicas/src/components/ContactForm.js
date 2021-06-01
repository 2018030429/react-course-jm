import React from 'react'
import { useForm } from '../hooks/useForm'

const initialForm = {};

const validationsForm = (form) => {} 

const ContactForm = () => {

  const { 
    form, 
    errors, 
    loading, 
    response, 
    handleBlur, 
    handleChange, 
    handleSubmit 
  } = useForm(initialForm);

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
          value={form.name } 
          required 
          />

        <input 
          type="email" 
          name="email" 
          placeholder="albert@example.com" 
          onChange={ handleChange } 
          onBlur={ handleBlur } 
          value={ form.email } 
          required 
          />

        <input 
          type="text" 
          name="subject" 
          placeholder="Subject" 
          onChange={ handleChange } 
          onBlur={ handleBlur } 
          value={ form.subject } 
          required 
          />

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

        <input 
          type="submit"
          value="Send"
          />
      </form>
    </div>
  )
}

export default ContactForm
