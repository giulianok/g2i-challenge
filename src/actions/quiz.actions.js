import * as types from './actionTypes'
import { getAllQuestions } from '../api/quiz.api'

export const loadQuizSuccess = questions =>
  console.log(questions) || {
    type: types.LOAD_QUIZ_SUCCESS,
    questions,
  }

export const loadQuestions = () => dispatch =>
  getAllQuestions()
    .then(questions => {
      dispatch(loadQuizSuccess(questions.results))
    })
    .catch(error => {
      throw error
    })
