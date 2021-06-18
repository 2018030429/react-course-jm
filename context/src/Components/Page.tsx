import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

import { MouseEvent, ChangeEvent } from "types/Event";
import { Translation, Detail } from "Interfaces/Translation";

const initialTheme = "light";
const initialLanguage = 'en';

const translation:Translation = {
  es: {
    headerTitle: "Mi aplicacion SIN Context Api",
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
    headerTitle: "My application WITHOUT Context Api",
    headerSubtitle: "My Header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Close Session",
    mainWelcome: "Welcome",
    mainHello: "Hello user",
    mainContent: "My main content",
    footerTitle: "My footer"
  }
}

const Page = () => {
  const [theme, setTheme] = useState<string>(initialTheme);
  const [language, setLanguage] = useState<string>(initialLanguage); 
  const [texts, setTexts] = useState<Detail>(translation[language as 'es'|'en']);

  const handleTheme = (e:MouseEvent) => {
    e.currentTarget.value === 'light'? setTheme('light'): setTheme('dark');
  };

  const handleLanguage = (e:ChangeEvent) => {
    if (e.target.value === 'en') {
      setLanguage('en');
      setTexts(translation.en);
    } else {
      setLanguage('es');
      setTexts(translation.es);
    }
  };

  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme} 
        texts={texts} handleLanguage={handleLanguage} />
      <Main theme={theme} texts={texts} />
      <Footer theme={theme} texts={texts} />
    </div>
  )
}

export default Page
