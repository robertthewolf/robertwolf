import React from 'react'
import styled from 'react-emotion'

import Plx from 'react-plx'

import { rhythm } from '../utils/typography'

export default class Contact extends React.Component {
  render() {
    return (
      <Plx
        parallaxData={[
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
        ]}
        css={`
          @media screen and (min-width: 600px) {
            float: right;
            margin-top: ${rhythm(1)};
            margin-right: calc(15vw - ${rhythm(1.66)});
          }
        `}
      >
        <p
          css={`
            font-weight: 600;
            padding: ${rhythm(3 / 4)};
            font-style: italic;
            text-align: right;
            color: white;

            a {
              color: rgba(255, 255, 255, 0.9);
              font-weight: 200;
            }
          `}
        >
          Robert Wolf
          <br />
          <a href="mailto:work@robertwolf.cz">work@robertwolf.cz</a>
          <br />
          <a href="tel:+16692041724">+1(669)204-1724</a>
          <br />
        </p>
      </Plx>
    )
  }
}