import { loadQuestions } from './Quiz.screen'
import request from 'request-promise'

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
