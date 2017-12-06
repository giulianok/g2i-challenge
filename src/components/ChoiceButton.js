import React from 'react'
import colors from '../colors'

const styles = {
  button: {
    display: 'inline-block',
    padding: '10px 15px',
    backgroundColor: colors.grayLight,
    color: 'white',
    textDecoration: 'none',
    fontSize: '1em',
    textTransform: 'uppercase',
  },
  buttonGreen: {
    backgroundColor: colors.green,
  },
  buttonRed: {
    backgroundColor: colors.red,
  },
}

const ButtonLink = ({ children, color, ...props }) => (
  <button
    style={{
      ...styles.button,
      ...(color === 'green' ? styles.buttonGreen : styles.buttonRed),
    }}
    {...props}
  >
    {children}
  </button>
)

ButtonLink.displayName = 'ButtonLink'

export default ButtonLink
