import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Dashboard from '../pages/Dashboard'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import ReactTopics from '../pages/ReactTopics'
import User from '../pages/User'
import ConceptMenu from './ConceptMenu'
import PrivateRoute from './PrivateRoute'

const BasicConcepts = () => {
  return (
    <div>
      <h2> Basic Concepts </h2>
      <Router>
        <ConceptMenu/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/:username" component={User} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contacto" children={<Redirect to="/contact" />} />
          <Route exact path="/acerca" children={<Redirect to="/about" />} />
          <Route path="/react" component={ReactTopics} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  )
}

export default BasicConcepts
