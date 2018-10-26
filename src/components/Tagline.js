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
        end: 100,
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: 'opacity',
          },
          {
            startValue: 0,
            endValue: 50,
            property: 'translateY',
          },
        ],
      },
    ]}
    css={`
      position: relative;
      z-index: 1;

    `}
  >
    <h1
      css={`
        margin-left: ${rhythm(1)};
        padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
        font-size: ${rhythm(1.5)};
        line-height: 1em;
        font-weight: bold;
        max-width: 7em;

        @media screen and (min-width: 600px) {
          margin-left: calc(15vw - ${rhythm(1.66)});
        }
      `}
    >
      {props.children}
    </h1>
  </Plx>
)
