import React from 'react'

const styles = {
  title: {
    textAlign: 'center',
    fontSize: '1.5em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '10px',
  },
}

const Title = ({ children }) => <h1 style={styles.title}>{children}</h1>

Title.displayName = 'Title'

export default Title
