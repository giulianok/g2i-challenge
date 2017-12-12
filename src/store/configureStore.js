import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { quizReducer } from '../modules/quiz'

const reducers = combineReducers({
  quiz: quizReducer,
})

export default function configureStore() {
  return createStore(reducers, applyMiddleware(thunk))
}
