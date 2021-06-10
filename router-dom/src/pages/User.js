import React from 'react'
import { useParams } from 'react-router'

const User = () => {
  let { username } = useParams();
  return (
    <div>
      <h3> User Perfil </h3>
      <p> User name: <b>{ username }</b> </p>
    </div>
  )
}

export default User
