import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'
import './reset.css'
import './index.css'
import Home from './screens/Home.screen'
import Quiz from './screens/Quiz.screen'
import Results from './screens/Results.screen'

const store = configureStore()

const App = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
`

ReactDOM.render(
  <App>
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/results" component={Results} />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  </App>,
  document.getElementById('root')
)

registerServiceWorker()
