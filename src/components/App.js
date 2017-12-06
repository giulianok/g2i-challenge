import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../screens/Home.screen'
import Quiz from '../screens/Quiz.screen'
import Results from '../screens/Results.screen'

// TODO: Replace <Fragment /> with <>

export default () => (
  <div className="App">
    <Router>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />
      </Fragment>
    </Router>
  </div>
)
