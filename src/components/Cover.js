import React from 'react'
import Plx from 'react-plx'
import posed from 'react-pose'

import { rhythm } from '../utils/typography'

const Box = posed.div({
  closed: {
    scale: 1,
  },
  open: {
    scale: 1.33,
    marginTop: 0,
    marginBottom: 200,
    marginRight: 'auto',
  },
})

export default props => (
  <Plx
    parallaxData={[
      {
        start: 0,
        end: 300,
        properties: [
          {
            startValue: 0.5,
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
      height: ${rhythm(8)};
      margin-top: -${rhythm(4)};
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
        margin-left: 16.6vw;
        margin-top: -${rhythm(6)}; 
        height: ${rhythm(12)};
        transform-origin: left top;
      }
      `}
    >
      {props.children}
    </Box>
  </Plx>
)
