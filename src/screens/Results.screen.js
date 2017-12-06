import _ from 'lodash/fp'
import React from 'react'
import { Redirect } from 'react-router-dom'
import Title from '../components/Title'
import ListResults from '../components/ListResults'
import ButtonLink from '../components/ButtonLink'

export const getResults = (answers, questions) =>
  answers.map((value, key) => ({
    value,
    question: questions[key].question,
  }))

export const getScore = _.flow(_.countBy(x => x.value === true), _.get('true'))

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
        <Title>You scored</Title>
        <h2>
          {getScore(results)} / {results.length}
        </h2>
      </header>
      <main>
        <ListResults results={results} />
      </main>
      <footer>
        <ButtonLink to="/quiz">Play again?</ButtonLink>
      </footer>
    </section>
  )
}

Results.displayName = 'Results'

export default Results
