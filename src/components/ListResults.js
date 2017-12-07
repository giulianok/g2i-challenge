import _ from 'lodash/fp'
import React from 'react'
import styled from 'styled-components'
import colors from '../colors'

const List = styled.ul`
  padding: 20px 0;
  text-align: left;
`

const Item = styled.li`
  padding: 10px 0;
  line-height: 1.3;
  fontsize: 0.8em;
`

const Result = styled.div`
  color: ${props => _.getOr('black', props.color, colors)};
`

const ListResults = ({ results }) => (
  <List>
    {results.map((result, key) => (
      <Item key={key}>
        <Result color={result.value ? 'green' : 'red'}>
          {result.question}
        </Result>
      </Item>
    ))}
  </List>
)

ListResults.displayName = 'ListResults'

export default ListResults
