import React from 'react'
import config from '../config'
import Title from '../components/Title'
import ButtonLink from '../components/ButtonLink'

const styles = {
  main: {
    marginTop: '50px',
  },
  p: {
    padding: '50px 0',
  },
}

export default () => (
  <section>
    <header>
      <Title>
        Welcome to the<br />Trivia Challenge
      </Title>
    </header>
    <main style={styles.main}>
      <p style={styles.p}>
        You will be presented with<br />
        {config.quiz.limit} True or False questions.
      </p>
      <p style={styles.p}>Can you score 100%</p>
    </main>
    <footer>
      <ButtonLink to="quiz">Begin</ButtonLink>
    </footer>
  </section>
)
