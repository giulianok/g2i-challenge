import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../screens/Home.screen'
import Quiz from '../screens/Quiz.screen'
import Results from '../screens/Results.screen'

// TODO: Replace <Fragment /> with <>
// TODO: Try styled-components

const styles = {
  wrapper: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '500px',
  },
}

export default () => (
  <div style={styles.wrapper}>
    <Router>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />
      </Fragment>
    </Router>
  </div>
)
