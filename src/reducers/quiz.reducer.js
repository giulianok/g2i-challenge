import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function quizReducer(state = initialState.quiz, action) {
  switch (action.type) {
    case types.LOAD_QUIZ_SUCCESS:
      return action.quiz
    default:
      return state
  }
}
