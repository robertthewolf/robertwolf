import React from 'react'

import { rhythm, scale } from '../utils/typography'

export default props => {
  return (
    <section
      css={`
        max-width: 600px;
        margin: 0 auto;
      `}
    >
      <h2 css={`
          @media screen and (min-width: 600px) {
                height: 0;
                margin-bottom: 0;
                transform: translateX(-100%);
                text-align: right;
                font-size: 1.125rem;
                padding-right: 2rem;
                // color: #dddddd;
                // font-weight: 200;
          }`}>{props.data.primary.heading.text}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.primary.text.html }}
        css={`
          em {
            font-size: ${rhythm(1.125)};
            line-height: ${rhythm(1.5)};
            font-weight: 200;
          }

          b, strong {
            color: #dddddd;
          }
        `}
      />
    </section>
  )
}
