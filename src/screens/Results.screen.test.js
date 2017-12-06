import { getResults, getScore } from './Results.screen'

let answers = [true, false, true]
let questions = [
  {
    question: 'Test1',
    somethingelse: true,
  },
  {
    question: 'Test2',
    somethingelse: true,
  },
  {
    question: 'Test3',
    somethingelse: true,
  },
]

describe(`getResults`, () => {
  it(`should return an union between answers and questions`, () => {
    expect(getResults(answers, questions)).toEqual([
      {
        value: true,
        question: 'Test1',
      },
      {
        value: false,
        question: 'Test2',
      },
      {
        value: true,
        question: 'Test3',
      },
    ])
  })
})

describe(`getScore`, () => {
  it(`should return an array with correct values`, () => {
    expect(getScore(getResults(answers, questions))).toEqual(2)
  })
})
