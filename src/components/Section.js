import React from 'react'

import { rhythm, scale } from '../utils/typography'

export default props => {
  return (
    <section
      css={`
        max-width: 600px;
        margin:0 auto;
        padding: 0 ${rhythm(1)};
      `}
    >
      <h2 css={`
          @media screen and (min-width: 600px) {
                height: 0;
                margin-bottom: 0;
                transform: translate(-100%, -${rhythm(.25)});
                text-align: right;
                font-size: ${rhythm(1)};
                padding-right: 2rem;
                color: #ccc;
                font-weight: 200;
          }`}>{props.data.primary.heading.text}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.primary.text.html }}
        css={`
          em {
            font-size: ${rhythm(.875)};
            line-height: ${rhythm(1.5)};
            font-weight: 200;
            color: #dddddd;
            background-color: #1e1e1e;
          }

          h3 {
            color: #bbb;
            font-size: ${rhythm(.75)};
            line-height: ${rhythm(1)};
            margin-bottom: ${rhythm(.5)};
          }

          b, strong {
            color: #dddddd;
          }

          a {
            color: #bbb;
            text-decoration: underline;
          }
        `}
      />
    </section>
  )
}
