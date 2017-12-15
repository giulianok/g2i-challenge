import _ from 'lodash/fp'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetQuiz } from '../modules/quiz'
import Title from '../components/Title'
import ListResults from '../components/ListResults'
import ButtonLink from '../components/ButtonLink'

export const getResults = (answers, questions) =>
  answers.map((value, key) => ({
    value,
    question: questions[key].question,
  }))

export const getScore = _.flow(_.countBy(x => x.value === true), _.get('true'))

const Results = ({ answers, questions, resetQuiz }) => {
  if (!_.isArray(answers) || !_.isArray(questions)) {
    return <Redirect to="/" />
  }

  let results = getResults(answers, questions)

  return (
    <section>
      <header>
        <Title>You scored</Title>
        <h2>
          {getScore(results)} / {results.length}
        </h2>
      </header>
      <main>
        <ListResults results={results} />
      </main>
      <footer>
        <ButtonLink to="/quiz" onClick={resetQuiz}>
          Play again?
        </ButtonLink>
      </footer>
    </section>
  )
}

Results.displayName = 'Results'

const mapStateToProps = state => ({
  questions: state.quiz.questions,
  answers: state.quiz.answers,
})

const mapActionsToProp = dispatch => ({
  resetQuiz: () => dispatch(resetQuiz()),
})

export default connect(mapStateToProps, mapActionsToProp)(Results)
