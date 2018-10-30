import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'

export default props => (
  <Link
    to={props.link}
    style={{
      marginLeft: 'auto',
      marginTop: rhythm(0.5),
      marginBottom: rhythm(0.5),
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        textTransform: 'uppercase',
        fontSize: rhythm(0.66),
        lineHeight: '1rem',
        marginRight: rhythm(0.33),
        fontWeight: 200,
      }}
    >
      next
    </div>
    <div
      css={`
        font-weight: bold;
        background-color: #4A4A4A;
        border-radius: ${rhythm(0.33)} 0 0 ${rhythm(0.33)};
        padding: ${rhythm(0.5)};

        @media screen and (min-width: 600px) {
          border-radius:  ${rhythm(0.33)};
          margin-right: ${rhythm(1)}
        }
      `}
    >
      {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
    </div>
  </Link>
)
