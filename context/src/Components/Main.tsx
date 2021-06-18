import React from 'react'

interface Prop {
  theme:string
}

const Main = ({ theme }:Prop) => {
  return (
    <main className={theme}>
      <p>Welcome guest</p>
      <p>Hello user</p>
      <p>My main content</p>
    </main>
  )
}

export default Main
