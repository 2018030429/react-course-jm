import React from 'react';
import { Detail } from "Interfaces/Translation";

interface Prop {
  theme:string,
  texts: Detail
}

const Footer = ({ theme, texts }:Prop) => {
  return (
    <footer className={theme}>
      <h4>{ texts.footerTitle }</h4>
    </footer>
  )
}

export default Footer
