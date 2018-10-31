import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'

import Button from './Button'

export default props => (
  <Link
    to={props.link}
    css={`
    margin-left: auto;
    margin-top: ${rhythm(.5)};
    margin-right: ${rhythm(.5)};
    display: flex;
    align-items: center;

    @media screen and (min-width: 600px) {
      margin-right: ${rhythm(1)};
    }`}
  >
    <div
      style={{
        textTransform: 'uppercase',
        fontSize: rhythm(0.66),
        marginRight: rhythm(0.33),
        fontWeight: 200,
      }}
    >
      next
    </div>
      <Button>
      {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </Button>
  </Link>
)
