import React from 'react'
import Plx from 'react-plx'
import posed from 'react-pose'

import { rhythm } from '../utils/typography'

const Box = posed.div({
  closed: {
    scale: 1,
    opacity: .7,
    y: 0,
  },
  open: {
    scale: 1.33,
    y: 100,
    opacity: 1,
    marginRight: 'auto',
  },
})

export default props => (
  <Plx
    freeze={props.open}
    parallaxData={[
      {
        start: 0,
        end: 300,
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: 'opacity',
          },
          {
            startValue: 0,
            endValue: 150,
            property: 'translateY',
          },
        ],
      },
    ]}
  >
    <Box
      pose={props.open ? 'open' : 'closed'}
      css={`
      width: 75vw;
      height: 42.2vw;
      margin-top: ${rhythm(4)};
      margin-bottom: -${rhythm(2)};
      margin-left: auto;
      transform-origin: right top;

      background-image: url('${props.image ? props.image : ''}');
      background-color: ${props.color ? props.color : ''};
      background-position: ${props.position ? props.position : 'center center'};
      background-size: ${props.size ? props.size : ''};
      background-repeat: no-repeat;




      @media screen and (min-width: 600px) {
        width: 50vw;
        height: 28.2vw;
        margin-left: 16.6vw;
        transform-origin: left top;
        margin-bottom: -${rhythm(6)};
      }
      `}
    >
      {props.children}
    </Box>
  </Plx>
)
