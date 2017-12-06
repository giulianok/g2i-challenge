import { getResults } from './Results.screen'

describe(`getResults`, () => {
  it(`should return an union between answers and questions`, () => {
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
