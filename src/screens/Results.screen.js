import _ from 'lodash/fp'
import React from 'react'
import { Redirect, Link } from 'react-router-dom'

export const getResults = (answers, questions) =>
  answers.map((value, key) => ({
    value,
    question: questions[key].question,
  }))

const ListResults = ({ results }) => (
  <ul>
    {_.map(
      result => (
        <li>
          <span>{result.value ? '+' : '-'}</span> {result.question}
        </li>
      ),
      results
    )}
  </ul>
)

const getScore = _.flow(_.countBy(x => x.value === true), _.get('true'))

const Results = props => {
  let answers = _.get('location.state.answers', props)
  let questions = _.get('location.state.questions', props)

  if (!_.isArray(answers) || !_.isArray(questions)) {
    return <Redirect to="/" />
  }

  let results = getResults(answers, questions)

  return (
    <section>
      <header>
        <h1>You scored</h1>
        <h2>
          {getScore(results)} / {results.length}
        </h2>
      </header>
      <main>
        <ListResults results={results} />
      </main>
      <footer>
        <Link to="/quiz">Play again?</Link>
      </footer>
    </section>
  )
}

Results.displayName = 'Results'

export default Results
