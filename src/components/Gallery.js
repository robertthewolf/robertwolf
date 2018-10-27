import React from 'react'
import Img from 'gatsby-image'

import { rhythm, scale } from '../utils/typography'

export default props => {
  return (
    <div>
      {props.data.items.map(item => (
        <figure
          key={item.image.url}
          css={`
            margin: ${rhythm(2)} auto;
            max-width: 800px;
          `}
        >
          {item.image.localFile !== null && (
            <Img
              sizes={item.image.localFile.childImageSharp.sizes}
              alt={item.image.alt}
            />
          )}

          {item.image.localFile === null && (
            <img src={item.image.url} alt={item.image.alt} />
          )}
          <figcaption
            css={`
              padding: ${rhythm(1)};
              text-align: center;
            `}
          >
            {item.caption.text}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
