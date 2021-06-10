import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'

const BasicConcepts = () => {
  return (
    <div>
      <h2> Basic Concepts </h2>
      <Router>
        <Switch>
          <Route exact path="/">
            <h3> Home </h3>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  )
}

export default BasicConcepts
