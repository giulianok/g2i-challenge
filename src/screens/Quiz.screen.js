import _ from 'lodash/fp'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import request from 'request-promise'
import he from 'he'
import config from '../config'
import * as quizActions from '../actions/quiz.actions'
import Question from '../components/Question'
import Loading from '../components/Loading'

export const loadQuestions = async () => {
  try {
    let response = await request({ uri: config.api, json: true })
    let questions = _.map(x => {
      x.question = he.decode(x.question)
      return x
    }, _.get('results', response))
    return { ok: true, data: questions }
  } catch (e) {
    if (e) console.error(e)
    return {
      error: true,
      details:
        'We have some trouble loading the questions. Please try again refreshing the page. Thanks',
    }
  }
}

class Quiz extends React.Component {
  state = {
    questions: null,
    loading: true,
    currentQuestion: 0,
    totalOfQuestions: config.quiz.limit,
    answers: [],
    done: false,
  }

  constructor() {
    super()
    this.onAnswer = this.onAnswer.bind(this)
  }

  componentDidMount() {
    // this.props.fetchQuiz()
  }

  // async componentDidMount() {
  //   let result = await loadQuestions()
  //   if (result.ok) {
  //     this.setState({
  //       questions: result.data,
  //       loading: false,
  //     })
  //   } else {
  //     alert(_.getOr('Server Error', 'details', result))
  //   }
  // }

  onAnswer(answer) {
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
            onClick={this.onAnswer}
          />
        )}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
})

const mapDispatchToProps = dispatch => ({
  fetchQuiz: dispatch(quizActions.loadQuestions),
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
