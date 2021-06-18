import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

import { MouseEvent } from "types/Event";

const initialTheme = "light";

const Page = () => {
  const [theme, setTheme] = useState<string>(initialTheme);

  const handleTheme = (e:MouseEvent) => {
    e.currentTarget.value === 'light'? setTheme('light'): setTheme('dark');
  };

  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  )
}

export default Page
