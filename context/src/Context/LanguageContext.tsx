import { Detail, Translation } from "Interfaces/Translation";
import React, { createContext, useState } from "react";
import { ChangeEvent } from "types/Event";

interface LanguageContextProps {
  texts?: Detail,
  handleLanguage: (e:ChangeEvent) => void
}

const LanguageContext:React.Context<LanguageContextProps> = createContext({
  handleLanguage: (e:ChangeEvent) => {}
});

const initialLanguage = 'en';

const translation:Translation = {
  es: {
    headerTitle: "Mi aplicacion CON Context Api",
    headerSubtitle: "Mi Cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesion",
    buttonLogout: "Cerrar Sesion",
    mainWelcome: "Bienvenido",
    mainHello: "Hola usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de pagina"
  },
  en: {
    headerTitle: "My application WITH Context Api",
    headerSubtitle: "My Header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Close Session",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello user",
    mainContent: "My main content",
    footerTitle: "My footer"
  }
}

const LanguageProvider:React.FC = ({ children }) => {
  const [language, setLanguage] = useState<string>(initialLanguage); 
  const [texts, setTexts] = useState<Detail>(translation[language as 'es'|'en']);
  
  const handleLanguage = (e:ChangeEvent) => {
    if (e.target.value === 'en') {
      setLanguage('en');
      setTexts(translation.en);
    } else {
      setLanguage('es');
      setTexts(translation.es);
    }
  };

  const data = { texts, handleLanguage };

  return(
    <LanguageContext.Provider value={data}>
      { children }
    </LanguageContext.Provider>
  );
}

export { LanguageProvider };
export default LanguageContext;
