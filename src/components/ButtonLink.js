import React from 'react'
import { Link } from 'react-router-dom'
import colors from '../colors'

const styles = {
  button: {
    display: 'inline-block',
    padding: '20px 25px',
    backgroundColor: colors.blue,
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.5em',
    textTransform: 'uppercase',
  },
}

const ButtonLink = ({ children, ...props }) => (
  <Link style={styles.button} {...props}>
    {children}
  </Link>
)

ButtonLink.displayName = 'ButtonLink'

export default ButtonLink
