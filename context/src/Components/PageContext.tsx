// * Components
import FooterContext from './FooterContext'
import HeaderContext from './HeaderContext'
import MainContext from './MainContext'

// * Contexts
import { ThemeProvider } from 'Context/ThemeContext';
import { LanguageProvider } from 'Context/LanguageContext';
import { AuthProvider } from 'Context/AuthContext';

const PageContext = () => {
  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <HeaderContext />
            <MainContext />
          </AuthProvider>
          <FooterContext />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  )
} 

export default PageContext;
