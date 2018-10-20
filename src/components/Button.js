import React from 'react'
import styled from 'react-emotion'

import { rhythm } from '../utils/typography'

export default (props) => {
  return (
    <Button primary={props.primary} secondary={props.secondary}>
      {props.children}
    </Button>
  )
}

const Button = styled.button`
outline: none;
cursor: pointer;
padding: ${rhythm(.25)} ${rhythm(.75)};
border-radius: 5px;
font-weight: bold;

border: 2px solid white;
box-sizing: border-box;

margin:  ${rhythm(.25)};

// secondary
${props => (props.secondary ? "background: transparent; color: white" : '')}
`