import React from 'react'
import Title from './Title'
import ChoiceButton from './ChoiceButton'

const styles = {
  question: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '300px',
    margin: '40px 0',
    padding: '0 20px',
    border: 'dashed 2px #ccc',
  },
  text: {
    lineHeight: '1.5',
  },
  buttons: {
    margin: '10px 0',
  },
}

const Question = ({ data, current, limit, onClick }) => (
  <React.Fragment>
    <header>
      <Title>{data.category}</Title>
    </header>
    <main>
      <div style={styles.question}>
        <p>{data.question}</p>
        <div style={styles.buttons}>
          <ChoiceButton color="green" onClick={() => onClick('True')}>
            True
          </ChoiceButton>
          <ChoiceButton color="red" onClick={() => onClick('False')}>
            False
          </ChoiceButton>
        </div>
      </div>
      <div>
        {++current} of {limit}
      </div>
    </main>
  </React.Fragment>
)

Question.displayName = 'Question'

export default Question
