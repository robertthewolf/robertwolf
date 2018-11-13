import React from 'react'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import { rhythm, scale } from '../utils/typography'

export default props => {
  return (
    <div>
      {props.data.items.map(item => (
        <Fade key={item.image.url}>
          <figure
            css={`
              margin: ${rhythm(2)} auto;
              max-width: 800px;
              background-color: #1e1e1e;
              border-radius: ${rhythm(0.33)};
              overflow: hidden;
              padding-bottom: ${rhythm(2)};
            `}
          >
            {item.image.localFile !== null &&
              item.image.localFile.childImageSharp !== null && (
                <Img
                  sizes={item.image.localFile.childImageSharp.sizes}
                  alt={item.image.alt}
                  css={`
                    margin: 0;
                    width: 100%;
                  `}
                />
              )}

            {item.image.localFile !== null &&
              item.image.localFile.childImageSharp === null && (
                <img
                  src={item.image.url}
                  alt={item.image.alt}
                  css={`
                    margin: 0;
                    width: 100%;
                  `}
                />
              )}
            <figcaption
              css={`
                padding: ${rhythm(0.75)} ${rhythm(0.66)} ${rhythm(0.66)};
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
