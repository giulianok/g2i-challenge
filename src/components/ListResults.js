import React from 'react'
import colors from '../colors'

const styles = {
  wrapper: {
    padding: '20px 0',
    textAlign: 'left',
  },
  item: {
    padding: '10px 0',
    lineHeight: '1.3',
    fontSize: '0.8em',
  },
  correct: {
    color: colors.green,
  },
  incorrect: {
    color: colors.red,
  },
}

const Result = ({ text, type }) => <div style={styles[type]}>{text}</div>

const ListResults = ({ results }) => (
  <ul style={styles.wrapper}>
    {results.map((result, key) => (
      <li key={key} style={styles.item}>
        {result.value ? (
          <Result type="correct" text={result.question} />
        ) : (
          <Result type="incorrect" text={result.question} />
        )}
      </li>
    ))}
  </ul>
)

ListResults.displayName = 'ListResults'

export default ListResults
