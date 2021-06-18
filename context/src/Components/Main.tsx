import React from 'react'
import { Detail } from "Interfaces/Translation";

interface Prop {
  theme:string,
  texts: Detail
}

const Main = ({ theme, texts }:Prop) => {
  return (
    <main className={theme}>
      <p>{ texts.mainWelcome }</p>
      <p>{ texts.mainHello }</p>
      <p>{ texts.mainContent }</p>
    </main>
  )
}

export default Main
