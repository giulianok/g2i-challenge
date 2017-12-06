import _ from 'lodash/fp'
import React from 'react'
import { Redirect } from 'react-router-dom'
import request from 'request-promise'
import config from '../config'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const loadQuestions = async () => {
  try {
    let response = await request({ uri: config.api, json: true })
    let questions = _.map(x => {
      x.question = _.unescape(x.question)
      return x
    }, _.get('results', response))
    return { ok: true, data: questions }
  } catch (e) {
    console.error(e)
    let details =
      'We have some trouble loading the questions. Please try again refreshing the page. Thanks'
    alert(details)
    return { error: true, details }
  }
}

const Question = ({ data, current, limit, onClick }) => (
  <React.Fragment>
    <header>
      <h1>{data.category}</h1>
    </header>
    <main>
      <div>
        {data.question} :: {data.correct_answer}
      </div>
      <div>
        <button onClick={() => onClick('True')}>True</button>
        <button onClick={() => onClick('False')}>False</button>
      </div>
      <div>
        {++current} of {limit}
      </div>
    </main>
  </React.Fragment>
)

const Loading = () => <div>LOADING...</div>

class Quiz extends React.Component {
  state = {
    questions: null,
    loading: true,
    currentQuestion: 0,
    totalOfQuestions: config.quiz.limit,
    answers: [],
    done: false,
  }

  async componentDidMount() {
    await sleep(1000 * 0)
    let result = await loadQuestions()
    if (result.ok) {
      this.setState({
        questions: result.data,
        loading: false,
      })
    }
  }

  onClick(answer) {
    let { questions, currentQuestion, answers, totalOfQuestions } = this.state
    let nextQuestion = currentQuestion + 1

    answers.push(questions[currentQuestion].correct_answer === answer)

    if (nextQuestion >= totalOfQuestions) {
      this.setState({
        done: true,
      })
    } else {
      this.setState({
        currentQuestion: nextQuestion,
      })
    }
  }

  render() {
    let {
      loading,
      currentQuestion,
      totalOfQuestions,
      questions,
      done,
      answers,
    } = this.state
    return (
      <section>
        {loading ? (
          <Loading />
        ) : done ? (
          <Redirect
            to={{
              pathname: '/results',
              state: { answers, questions },
            }}
          />
        ) : (
          <Question
            data={questions[currentQuestion]}
            current={currentQuestion}
            limit={totalOfQuestions}
            onClick={this.onClick.bind(this)}
          />
        )}
      </section>
    )
  }
}

export default Quiz
