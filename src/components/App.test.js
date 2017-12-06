import React from 'react'
import { mount } from 'enzyme'
import { Router, Route } from 'react-router-dom'

import App from './App'
import Home from '../screens/Home.screen'
import Quiz from '../screens/Quiz.screen'
import Results from '../screens/Results.screen'

describe(`<App />`, () => {
  it(`renders <Router>`, () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(Router).length).toBe(1)
  })

  it(`renders <Route> for Home, Quiz and Results`, () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(Route).length).toBe(3)
    expect(wrapper.contains(<Route exact path="/" component={Home} />)).toBe(
      true
    )
    expect(wrapper.contains(<Route path="/quiz" component={Quiz} />)).toBe(true)
    expect(
      wrapper.contains(<Route path="/results" component={Results} />)
    ).toBe(true)
  })
})
