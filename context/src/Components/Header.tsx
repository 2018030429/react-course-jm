import React from 'react';
import { MouseEvent, ChangeEvent, ButtonEvent } from 'types/Event';
import { Detail } from "Interfaces/Translation";

interface Prop {
  theme:string,
  handleTheme: (e:MouseEvent) => void,
  handleLanguage: (e:ChangeEvent) => void,
  handleAuth: (e:ButtonEvent) => void,
  texts: Detail,
  auth:null|boolean
}

const Header = ({ theme, handleTheme, handleLanguage, texts, handleAuth, auth }:Prop) => {
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
      <button onClick={handleAuth}>
        { auth? texts.buttonLogout: texts.buttonLogin  }
      </button>
    </header>
  )
}

export default Header
