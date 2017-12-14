import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import config from '../config'
import * as quiz from '../modules/quiz'
import Question from '../components/Question'
import Loading from '../components/Loading'

class Quiz extends React.Component {
  state = {
    currentQuestion: 0,
    totalOfQuestions: config.quiz.limit,
    done: false,
  }

  constructor() {
    super()
    this.onAnswer = this.onAnswer.bind(this)
  }

  componentDidMount() {
    this.props.fetchQuiz()
  }

  onAnswer(answer) {
    let { currentQuestion, totalOfQuestions } = this.state
    let { quiz, pushAnswer } = this.props
    let { questions } = quiz
    let nextQuestion = currentQuestion + 1

    pushAnswer(questions[currentQuestion].correct_answer === answer)

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
    let { currentQuestion, totalOfQuestions, done } = this.state
    let { questions, error } = this.props.quiz
    return (
      <section>
        {done ? (
          <Redirect
            to={{
              pathname: '/results',
            }}
          />
        ) : questions ? (
          <Question
            data={questions[currentQuestion]}
            current={currentQuestion}
            limit={totalOfQuestions}
            onClick={this.onAnswer}
          />
        ) : error ? (
          <div>Error! {error}</div>
        ) : (
          <Loading />
        )}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  quiz: state.quiz,
})

const mapDispatchToProps = dispatch => ({
  fetchQuiz: () => dispatch(quiz.loadQuestions()),
  pushAnswer: answer => dispatch(quiz.pushAnswer(answer)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
