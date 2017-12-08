import React from 'react'
import styled from 'styled-components'
import config from '../config'
import Title from '../components/Title'
import ButtonLink from '../components/ButtonLink'

const Main = styled.main`
  margin-top: 50px;
`

const Text = styled.p`
  padding: 50px 0;
`

export default () => (
  <section>
    <header>
      <Title>
        Welcome to the<br />Trivia Challenge
      </Title>
    </header>
    <Main>
      <Text>
        You will be presented with<br />
        {config.quiz.limit} True or False questions.
      </Text>
      <Text>Can you score 100%</Text>
    </Main>
    <footer>
      <ButtonLink to="quiz">Begin</ButtonLink>
    </footer>
  </section>
)
