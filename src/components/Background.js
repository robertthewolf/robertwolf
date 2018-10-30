import React from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'
import Flip from 'react-reveal/Flip'
import Zoom from 'react-reveal/Zoom'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

import Button from './Button'

export default props => (
  <StaticQuery
    query={graphql`
      query catQuery {
        allPrismicBackground(sort: { fields: [data___date], order: ASC }) {
          edges {
            node {
              id
              data {
                name {
                  text
                }
                type
                date
                title {
                  text
                }
                client {
                  text
                }
                description {
                  html
                }
                cta {
                  text
                }
                link {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const monthNames = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
      ]

      return (
        <article
          css={`
            margin: ${rhythm(7)} auto 0;
            max-width: 600px;

            > *:last-child {
              margin-bottom: ${rhythm(7)};
            }
          `}
        >
          {data.allPrismicBackground.edges.map(edge => {
            const date = new Date(edge.node.data.date)

            return (
              <Flip bottom>
                <section
                  key={edge.node.data.name.text}
                  className={edge.node.data.type}
                  css={`
                    margin: calc(20vw + ${rhythm(5)}) 0;
                    padding: ${rhythm(0.75)};
                    color: white;
                  `}
                >
                  <time
                    css={`
                      font-weight: 200;
                      font-style: italic;
                    `}
                  >
                    {monthNames[date.getMonth()] + date.getFullYear()}
                  </time>
                  <h2
                    css={`
                      font-family: 'PlainBlack-Italic', sans-serif;
                      text-transform: uppercase;
                      margin: 0;
                    `}
                  >
                    {edge.node.data.title.text}
                  </h2>
                  <small
                    css={`
                      font-weight: 600;
                      font-style: italic;
                    `}
                  >
                    {edge.node.data.client.text}
                  </small>
                  <p
                    css={`
                      margin-top: ${rhythm(0.5)};
                    `}
                    dangerouslySetInnerHTML={{
                      __html: edge.node.data.description.html,
                    }}
                  />
                  {edge.node.data.cta.text !== null && (
                    <Button to={edge.node.data.link.url} color="black">
                      {edge.node.data.cta.text}
                    </Button>
                  )}
                </section>
              </Flip>
            )
          })}
        </article>
      )
    }}
  />
)
