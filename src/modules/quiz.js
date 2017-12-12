import _ from 'lodash/fp'
import he from 'he'
import config from '../config'

export const LOAD_QUIZ_SUCCESS = 'LOAD_QUIZ_SUCCESS'
export const LOAD_QUIZ_FAILURE = 'LOAD_QUIZ_FAILURE'

export const getAllQuestions = () =>
  fetch(config.api)
    .then(response => response.json())
    .then(json => json.results)
    .then(
      _.map(x => {
        x.question = he.decode(x.question)
        return x
      })
    )
    .catch(error => error)

export const loadQuizSuccess = questions => ({
  type: LOAD_QUIZ_SUCCESS,
  questions,
})

export const loadQuizFailure = e => ({
  type: LOAD_QUIZ_FAILURE,
  e,
})

export const loadQuestions = () => async dispatch => {
  try {
    dispatch(loadQuizSuccess(await getAllQuestions()))
  } catch (e) {
    dispatch(loadQuizFailure(e))
  }
}

export const quizReducer = (state = {}, { type, questions }) => {
  switch (type) {
    case LOAD_QUIZ_SUCCESS:
      return { questions }
    case LOAD_QUIZ_FAILURE:
      return {
        error:
          'We have some trouble loading the questions. Please try again refreshing the page. Thanks',
      }
    default:
      return state
  }
}
