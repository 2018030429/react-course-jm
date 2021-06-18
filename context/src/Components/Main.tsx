import React from 'react'
import { Detail } from "Interfaces/Translation";

interface Prop {
  theme:string,
  texts:Detail,
  auth:null|boolean
}

const Main = ({ theme, texts, auth }:Prop) => {
  return (
    <main className={theme}>
      { auth? <p>{ texts.mainHello }</p> : <p>{ texts.mainWelcome }</p> }
      <p>{ texts.mainContent }</p>
    </main>
  )
}

export default Main
