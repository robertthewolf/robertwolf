import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

export default props => {
  return (
    <Link
      to={props.link}
      css={`
      display: block;
      margin: ${rhythm(0.5)};
      padding: ${rhythm(0.75)};
      font-weight: 200;
      text-transform: uppercase;
      font-size: ${rhythm(0.66)};
      line-height: 1rem;
      transition: transform .15s ease-in;

      &::before {
        content: '–';
        margin-right: .33em;
        display: inline-block;
        transition: transform .15s ease-in;
        transform-origin: right center;
      }

      &:hover {
        transform: translateX(.5em);

        &::before {
          transform: scaleX(2);
        }
      }
      `}
    >
      Back
    </Link>
  )
}
