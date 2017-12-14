import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { quizReducer } from '../modules/quiz'

const reducers = combineReducers({
  quiz: quizReducer,
})

export default function configureStore() {
  return createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
}
