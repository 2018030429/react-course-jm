import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import ConceptMenu from './ConceptMenu'

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
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  )
}

export default BasicConcepts
