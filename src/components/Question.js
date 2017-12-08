import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import ChoiceButton from './ChoiceButton'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  margin: 40px 0;
  padding: 0 20px;
  border: dashed 2px #ccc;
`

const Buttons = styled.div`
  margin: 10px 0;
`

const Question = ({ data, current, limit, onClick }) => (
  <React.Fragment>
    <header>
      <Title>{data.category}</Title>
    </header>
    <main>
      <Wrapper>
        <p>{data.question}</p>
        <Buttons>
          <ChoiceButton color="green" onClick={() => onClick('True')}>
            True
          </ChoiceButton>
          <ChoiceButton color="red" onClick={() => onClick('False')}>
            False
          </ChoiceButton>
        </Buttons>
      </Wrapper>
      <div>
        {++current} of {limit}
      </div>
    </main>
  </React.Fragment>
)

Question.displayName = 'Question'

export default Question
