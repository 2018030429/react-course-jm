import { useState } from 'react'
import FooterContext from './FooterContext'
import HeaderContext from './HeaderContext'
import MainContext from './MainContext'

import { ButtonEvent } from "types/Event";
import { ThemeProvider } from 'Context/ThemeContext';
import { LanguageProvider } from 'Context/LanguageContext';

const initialAuth = null;

const PageContext = () => {
  
  const [auth, setAuth] = useState<null|boolean>(initialAuth);

  const handleAuth = (e:ButtonEvent) => {
    auth? setAuth(null): setAuth(true);
  }
  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <HeaderContext auth={auth} handleAuth={handleAuth} />
          <MainContext auth={auth} />
          <FooterContext />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  )
} 

export default PageContext;
