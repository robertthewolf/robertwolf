import React from 'react'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import { rhythm, scale } from '../utils/typography'

export default props => {
  return (
    <div>
      {props.data.items.map(item => (
        <Fade
        key={item.image.url}>
        <figure
          css={`
            margin: ${rhythm(2)} auto;
            max-width: 800px;
            background-color: #1e1e1e;
            border-radius: ${rhythm(.33)};
            overflow: hidden;

            img {
              margin: 0;
            }
          `}
        >
          {item.image.localFile.childImageSharp !== null && (
            <Img
              sizes={item.image.localFile.childImageSharp.sizes}
              alt={item.image.alt}
            />
          )}

          {item.image.localFile.childImageSharp === null && (
            <img src={item.image.url} alt={item.image.alt} />
          )}
          <figcaption
            css={`
              padding: ${rhythm(.75)} ${rhythm(.66)} ${rhythm(.66)};
              text-align: center;
              color: #dddddd;
            `}
          >
            {item.caption.text}
          </figcaption>
        </figure>
        </Fade>
      ))}
    </div>
  )
}
