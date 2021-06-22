import React, { useContext } from 'react';

// * Contexts
import ThemeContext from 'Context/ThemeContext';
import LanguageContext from 'Context/LanguageContext';
import AuthContext from 'Context/AuthContext';


const HeaderContext:React.FC = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);

  return (  
    <header className={theme}>
      <h2>{ texts!.headerTitle }</h2>
      <h3>{ texts!.headerSubtitle }</h3>
      <select name="language" onChange={handleLanguage}>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
      <input type="radio" name="theme" id="light-context" 
        value="light" onClick={handleTheme} />
      <label htmlFor="light-context">{ texts!.headerLight }</label>
      <input type="radio" name="theme" id="dark-context" 
        value="dark" onClick={handleTheme} />
      <label htmlFor="dark-context">{ texts!.headerDark }</label>
      <button onClick={handleAuth}>
        { auth? texts!.buttonLogout: texts!.buttonLogin  }
      </button>
    </header>
  )
}

export default HeaderContext;
