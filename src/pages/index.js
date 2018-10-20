import React from 'react'
import styled from 'react-emotion'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Plx from 'react-plx'

import { rhythm } from '../utils/typography'

//components
import Tagline from '../components/Tagline'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Background from '../components/Background'

export default class BlogIndex extends React.Component {
  render() {
    return (
      <div>
        <Contact />

        <Tagline>
          Hi! I've got
          <br /> something
          <br /> for you
        </Tagline>
        <Skills />
        <Plx parallaxData={parallaxButton}>
        <BackgroundButton>Background</BackgroundButton>
        </Plx>

        <Plx className="parallaxBackground" parallaxData={parallaxBackground}>
          <Background />
        </Plx>
      </div>
    )
  }
}

const BackgroundButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: ${rhythm(1)};
  transform: translateX(-50%);
  text-align: center;
  text-transform: uppercase;
`


const parallaxButton = [
  {
    start: 0,
    end: 200,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
]

const parallaxBackground = [
  {
    start: 50,
    end: 500,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
      {
        startValue: -50,
        endValue: 0,
        property: 'translateY',
      },
    ],
  },
]
