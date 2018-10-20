import React from 'react'
import styled from 'react-emotion'
import { StaticQuery, Link, graphql } from 'gatsby'

import Plx from 'react-plx'

import { rhythm } from '../utils/typography'

export default props => (
  <Plx
    parallaxData={[
      {
        start: 0,
        end: 500,
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: 'opacity',
          },
          {
            startValue: 0,
            endValue: 100,
            property: 'translateY',
          },
        ],
      },
    ]}
    style={{
      position: 'relative',
      zIndex: 1
    }}
  >
    <Tagline>{props.children}</Tagline>
  </Plx>
)

const Tagline = styled.h1`
  margin-left: ${rhythm(1)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  font-size: ${rhythm(1.5)};
  line-height: 1em;
  font-weight: bold;
  max-width: 7em;
`
