import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const BasicConcepts = () => {
  return (
    <div>
      <h2> Basic Concepts </h2>
      <Router>
        <Switch>
          <Route exact path="/">
            <h3> Home </h3>
          </Route>
          <Route path="/about">
            <h3> About </h3>
          </Route>
          <Route path="/contact">
            <h3> contact </h3>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default BasicConcepts
