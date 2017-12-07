import styled from 'styled-components'
import colors from '../colors'

const ChoiceButton = styled.button`
  display: inline-block;
  padding: 10px 15px;
  background-color: ${props => props.color};
  color: white;
  text-decoration: none;
  font-size: 1em;
  text-transform: uppercase;
`

ChoiceButton.defaultProps = {
  color: colors.grayLight,
}

export default ChoiceButton
