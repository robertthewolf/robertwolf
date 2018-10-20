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
      style={{
        width: '75vw',
        height: rhythm(8),
        marginTop: `-${rhythm(4)}`,
        marginBottom: `-${rhythm(2)}`,
        marginLeft: 'auto',
        backgroundColor: '#434343',
        backgroundImage: `url('${props.src}')`,
        backgroundSize: props.size ? props.size : 'cover',
        backgroundPosition: props.position ? props.position : 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  </Plx>
)
