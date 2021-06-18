import React from 'react'

interface Prop {
  theme:string
}

const Footer = ({ theme }:Prop) => {
  return (
    <footer className={theme}>
      <h4>My footer</h4>
    </footer>
  )
}

export default Footer
