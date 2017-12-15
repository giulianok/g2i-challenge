// @flow
import _ from 'lodash/fp'
import he from 'he'
import config from '../config'
import {
  QuestionAPIresponse,
  QuestionAPIresult,
  ThunkAction,
} from '../flowTypes'

export const LOAD_QUIZ_SUCCESS = 'LOAD_QUIZ_SUCCESS'
export const LOAD_QUIZ_FAILURE = 'LOAD_QUIZ_FAILURE'
export const PUSH_ANSWER = 'PUSH_ANSWER'
export const RESET_QUIZ = 'RESET_QUIZ'

const defaultState = {
  questions: null,
  answers: [],
}

type LoadQuizSuccessAction = {
  type: 'LOAD_QUIZ_SUCCESS',
  questions: QuestionAPIresult[],
}

export const loadQuizSuccess = (
  questions: QuestionAPIresult
): LoadQuizSuccessAction => ({
  type: LOAD_QUIZ_SUCCESS,
  questions,
})

type LoadQuizFailureAction = { type: 'LOAD_QUIZ_FAILURE', e: Error }

export const loadQuizFailure = (e: Error): LoadQuizFailureAction => ({
  type: LOAD_QUIZ_FAILURE,
  e,
})

type PushAnswerAction = { type: 'PUSH_ANSWER', answer: boolean }

export const pushAnswer = (answer: boolean): PushAnswerAction => ({
  type: PUSH_ANSWER,
  answer,
})

type ResetQuizAction = { type: 'RESET_QUIZ' }

export const resetQuiz = (): ResetQuizAction => ({
  type: RESET_QUIZ,
})

export const getAllQuestions = () =>
  fetch(config.api)
    .then((response): QuestionAPIresponse => response.json())
    .then((json): QuestionAPIresult[] => json.results)
    .then(
      _.map(x => {
        x.question = he.decode(x.question)
        return x
      })
    )
    .catch(error => error)

export const loadQuestions = (): ThunkAction<Action> => async dispatch => {
  try {
    dispatch(loadQuizSuccess(await getAllQuestions()))
  } catch (e) {
    dispatch(loadQuizFailure(e))
  }
}

type Action =
  | LoadQuizSuccessAction
  | LoadQuizFailureAction
  | PushAnswerAction
  | ResetQuizAction

export const quizReducer = (
  state: any = defaultState,
  payload: Action
): any => {
  switch (payload.type) {
    case LOAD_QUIZ_SUCCESS: {
      return {
        ...state,
        questions: payload.questions,
      }
    }
    case LOAD_QUIZ_FAILURE:
      return {
        error:
          'We have some trouble loading the questions. Please try again refreshing the page. Thanks',
      }
    case PUSH_ANSWER: {
      state.answers.push(payload.answer)
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
