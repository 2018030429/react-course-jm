import React, { useContext } from 'react'
import ThemeContext from 'Context/ThemeContext';
import LanguageContext from 'Context/LanguageContext';

interface Prop {
  auth:null|boolean
}

const MainContext:React.FC<Prop> = ({ auth }) => {

  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <main className={theme}>
      { auth? <p>{ texts!.mainHello }</p> : <p>{ texts!.mainWelcome }</p> }
      <p>{ texts!.mainContent }</p>
    </main>
  )
}

export default MainContext;
