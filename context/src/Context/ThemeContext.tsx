import React, { createContext, useState } from "react";
import { MouseEvent } from "types/Event";

interface ThemeContextProps {
  theme: string,
  handleTheme: (e:MouseEvent) => void
}

const ThemeContext:React.Context<ThemeContextProps> = createContext({
  theme: '',
  handleTheme: (e:MouseEvent) => {} 
});

const initialTheme = 'light';

const ThemeProvider:React.FC = ({ children }) => {
  const [theme, setTheme] = useState<string>(initialTheme);

  const handleTheme = (e:MouseEvent) => {
    e.currentTarget.value === 'light'? setTheme('light'): setTheme('dark');
  };

  const data = { theme, handleTheme };

  return(
    <ThemeContext.Provider value={data}>
      { children }
    </ThemeContext.Provider>
  )
}

export { ThemeProvider };
export default ThemeContext;
