import { combineReducers } from 'redux'
import quiz from './quiz.reducer'

const rootReducer = combineReducers({
  quiz,
})

export default rootReducer
