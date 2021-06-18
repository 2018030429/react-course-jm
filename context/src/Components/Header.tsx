import React from 'react';
import { MouseEvent } from 'types/Event';

interface Prop {
  theme:string,
  handleTheme: (e:MouseEvent) => void
}

const Header = ({ theme, handleTheme }:Prop) => {
  return (
    <header className={theme}>
      <h2>My Application without CONTEXT API</h2>
      <h3>Header</h3>
      <select name="language">
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
      <input type="radio" name="theme" id="light" 
        value="light" onClick={handleTheme} />
      <label htmlFor="light">Light</label>
      <input type="radio" name="theme" id="dark" 
        value="dark" onClick={handleTheme} />
      <label htmlFor="dark">Dark</label>
      <button>Login</button>
    </header>
  )
}

export default Header
