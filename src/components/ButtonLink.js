import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../colors'

export default styled(Link)`
  display: inline-block;
  padding: 20px 25px;
  background-color: ${colors.blue};
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  text-transform: uppercase;
`
