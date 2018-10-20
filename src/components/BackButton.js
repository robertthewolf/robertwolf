import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

export default props => {
  return (
    <Link
      to="#"
      onClick={() => window.history.back()}
      css={{
        display: 'block',
        margin: rhythm(0.5),
        padding: rhythm(0.75),

        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: rhythm(0.6),
        lineHeight: '1rem',
      }}
    >
      – Back
    </Link>
  )
}
