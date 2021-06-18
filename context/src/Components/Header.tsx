import React from 'react';
import { MouseEvent, ChangeEvent } from 'types/Event';
import { Detail } from "Interfaces/Translation";

interface Prop {
  theme:string,
  handleTheme: (e:MouseEvent) => void,
  handleLanguage: (e:ChangeEvent) => void,
  texts: Detail
}

const Header = ({ theme, handleTheme, handleLanguage, texts }:Prop) => {
  return (  
    <header className={theme}>
      <h2>{ texts.headerTitle }</h2>
      <h3>{ texts.headerSubtitle }</h3>
      <select name="language" onChange={handleLanguage}>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
      <input type="radio" name="theme" id="light" 
        value="light" onClick={handleTheme} />
      <label htmlFor="light">{ texts.headerLight }</label>
      <input type="radio" name="theme" id="dark" 
        value="dark" onClick={handleTheme} />
      <label htmlFor="dark">{ texts.headerDark }</label>
      <button>{ texts.buttonLogin }</button>
      <button>{ texts.buttonLogout }</button>
    </header>
  )
}

export default Header
