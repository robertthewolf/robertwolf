import React from 'react'
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
            startValue: .5,
            endValue: 0,
            property: 'opacity',
          },
        ],
      },
    ]}
  >
    <div

      css={`
      width: 75vw;
      height: ${rhythm(8)};
      margin-top: -${rhythm(4)};
      margin-bottom: -${rhythm(2)};
      margin-left: auto;

      background-image: url('${props.image ? props.image : ''}');
      background-color: ${props.color ? props.color : ''};
      background-position: ${props.position ? props.position : 'center center'};
      background-size: ${props.size ? props.size : ''};
      background-repeat: no-repeat;

      @media screen and (min-width: 600px) {
        width: 40vw;
        margin-right: 45vw;
        margin-top: -${rhythm(6)}; 
        height: ${rhythm(12)};
      }
      `}
    />
  </Plx>
)
