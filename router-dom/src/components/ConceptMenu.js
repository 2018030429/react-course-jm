import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ConceptMenu = () => {
  return (
    <nav>
      <ol>
        <li> 
          <span> Menu with html links (no recommended) </span>
          <br/>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
        </li>
        <li>
          <span> Link Component </span>
          <br/>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/no-exist">404 Error</Link>
        </li>
        <li>
          <span> NavLink Component </span>
          <br/>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
          <NavLink exact to="/about" activeClassName="active">About</NavLink>
          <NavLink exact to="/no-exist" activeClassName="active">404 Error</NavLink>
        </li>
        <li>
          <span> Params </span>
          <br/>
          <Link to="/user/enrique">Enrique</Link>
          <Link to="/user/isaias">Isaias</Link>
        </li>
        <li>
          <span> Consult Params </span>
          <br/>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <span> Redirect </span>
          <br/>
          <Link to="/contacto">Contact</Link>
          <Link to="/acerca">About</Link>
        </li>
        <li>
          <span> Nested Routes </span>
          <br/>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span> Private Routes </span>
          <br/>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  )
}

export default ConceptMenu
