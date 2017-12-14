import _ from 'lodash/fp'
import he from 'he'
import config from '../config'

export const LOAD_QUIZ_SUCCESS = 'LOAD_QUIZ_SUCCESS'
export const LOAD_QUIZ_FAILURE = 'LOAD_QUIZ_FAILURE'
export const PUSH_ANSWER = 'PUSH_ANSWER'
export const RESET_QUIZ = 'RESET_QUIZ'

const defaultState = {
  questions: null,
  answers: [],
}

export const loadQuizSuccess = questions => ({
  type: LOAD_QUIZ_SUCCESS,
  questions,
})

export const loadQuizFailure = e => ({
  type: LOAD_QUIZ_FAILURE,
  e,
})

export const pushAnswer = answer => ({
  type: PUSH_ANSWER,
  answer,
})

export const resetQuiz = () => ({
  type: RESET_QUIZ,
})

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

export const loadQuestions = () => async dispatch => {
  try {
    dispatch(loadQuizSuccess(await getAllQuestions()))
  } catch (e) {
    dispatch(loadQuizFailure(e))
  }
}

export const quizReducer = (
  state = defaultState,
  { type, questions, answer }
) => {
  switch (type) {
    case LOAD_QUIZ_SUCCESS: {
      return {
        ...state,
        questions,
      }
    }
    case LOAD_QUIZ_FAILURE:
      return {
        error:
          'We have some trouble loading the questions. Please try again refreshing the page. Thanks',
      }
    case PUSH_ANSWER: {
      state.answers.push(answer)
      return state
    }
    case RESET_QUIZ: {
      return {
        ...state,
        questions: null,
        answers: [],
      }
    }
    default:
      return state
  }
}
