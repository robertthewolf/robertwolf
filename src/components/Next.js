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
        fontSize: rhythm(0.6),
        lineHeight: '1rem',
        marginRight: rhythm(0.33),
      }}
    >
      next
    </div>
    <div
      style={{
        fontWeight: 'bold',
        backgroundColor: '#4A4A4A',
        borderRadius: `${rhythm(0.33)} 0 0 ${rhythm(0.33)}`,
        padding: rhythm(0.5),
      }}
    >
      {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
    </div>
  </Link>
)
