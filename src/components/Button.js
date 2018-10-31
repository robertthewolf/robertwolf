import React from 'react'

import { rhythm } from '../utils/typography'

export default props => {
  return (
    <a
      href={props.to ? props.to : ''}
      css={`
        outline: none;
        cursor: pointer;
        padding: ${rhythm(0.33)} ${rhythm(0.5)};
        border-radius: 5px;
        font-weight: bold;

        border: 2px solid white;
        box-sizing: border-box;

        margin: ${rhythm(0.5)} 0;
      `}
    >
      {props.children}
    </a>
  )
}
