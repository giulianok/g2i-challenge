import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../screens/Home.screen'
import Quiz from '../screens/Quiz.screen'
import Results from '../screens/Results.screen'

// TODO: Replace <Fragment /> with <>

const App = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
`

export default () => (
  <App>
    <Router>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />
      </Fragment>
    </Router>
  </App>
)
