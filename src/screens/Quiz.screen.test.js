import React from 'react'
import request from 'request-promise'
import { mount, shallow } from 'enzyme'
import Quiz, { loadQuestions } from './Quiz.screen'
import Loading from '../components/Loading'
import Question from '../components/Question'

const sleep = ms => new Promise(res => setTimeout(res, ms))

let data = [
  {
    category: 'Entertainment: Comics',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'In &quot;Metal Gear Solid 2&quot;, you will see through the eyes of Psycho Mantis if you go first person during his boss fight.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
]

describe(`loadQuestions`, () => {
  it(`should return ok with data`, async () => {
    request.__SET_RESULT(true, {
      response_code: 0,
      results: data,
    })
    expect(await loadQuestions()).toEqual({ ok: true, data })
  })

  it(`should return error if something wrong happened`, async () => {
    request.__SET_RESULT(false)
    expect(await loadQuestions()).toEqual({
      error: true,
      details:
        'We have some trouble loading the questions. Please try again refreshing the page. Thanks',
    })
  })
})

describe(`<Quiz />`, () => {
  it(`should render the first state, which loads the questions`, async () => {
    request.__SET_RESULT(
      true,
      {
        response_code: 0,
        results: data,
      },
      1000
    )
    let quiz = shallow(<Quiz />)
    expect(quiz.contains(<Loading />)).toBe(true)
    expect(quiz.state()).toEqual({
      questions: null,
      loading: true,
      currentQuestion: 0,
      totalOfQuestions: 2,
      answers: [],
      done: false,
    })

    // Loading data
    await sleep(1000 * 1.5)
    quiz.update()

    // After we load the data
    expect(
      quiz.contains(
        <Question
          data={quiz.state().questions[0]}
          current={0}
          limit={2}
          onClick={quiz.instance().onAnswer}
        />
      )
    ).toBe(true)
    expect(quiz.state()).toEqual({
      questions: data,
      loading: false,
      currentQuestion: 0,
      totalOfQuestions: 2,
      answers: [],
      done: false,
    })
  })

  describe(`onAnswer`, () => {
    it(`should validate the answer and move to the next question until it's done`, async () => {
      request.__SET_RESULT(true, {
        response_code: 0,
        results: data,
      })
      let quiz = mount(<Quiz />)
      await sleep(500)
      quiz.update()

      expect(quiz.find('button').length).toBe(2)

      // First Answer
      quiz
        .find('button')
        .first()
        .simulate('click')

      expect(quiz.state()).toEqual({
        questions: data,
        loading: false,
        currentQuestion: 1,
        totalOfQuestions: 2,
        answers: [false],
        done: false,
      })
    })
  })
})
