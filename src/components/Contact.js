import React from 'react'
import styled from 'react-emotion'

import Plx from 'react-plx'

import { rhythm } from '../utils/typography'

class Contact extends React.Component {
  render() {
    return (
      <Plx parallaxData={parallaxContact} css={`

        @media screen and (min-width: 600px) {
          float: right;
          margin-top: ${rhythm(1)};
          margin-right: 15vw;
          text-align: right;
        }
      `}>
        <Text>
          Robert Wolf
          <br />
          <a href="mailto:work@robertwolf.cz">work@robertwolf.cz</a>
          <br />
          <a href="tel:+16692041724">+1(669)204-1724</a>
          <br />
        </Text>
      </Plx>
    )
  }
}

export default Contact

const Text = styled.p`
  font-weight: 600;
  padding: ${rhythm(3 / 4)};

  @media screen and (max-width: 500px) {
    text-align: right;
  }

  a {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 200;
  }
`

const parallaxContact = [
  {
    start: 0,
    end: 50,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
]
