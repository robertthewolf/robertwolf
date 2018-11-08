import React from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'
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
                image {
                  url
                  alt
                  localFile {
                    childImageSharp {
                      sizes {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                        originalImg
                        originalName
                        presentationWidth
                        presentationHeight
                      }
                    }
                  }
                }
                title {
                  text
                }
                client {
                  text
                }
                description {
                  text
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
          `}
        >
          {data.allPrismicBackground.edges.map(edge => {
            const date = new Date(edge.node.data.date)

            return (
              <div
                css={`
                  position: relative;

                  &:last-of-type div:last-of-type {
                    background: linear-gradient(#4b0c49, transparent),
                      linear-gradient(to top left, #fda629, transparent),
                      linear-gradient(to top right, #fd66f1, transparent);
                    background-blend-mode: screen;
                  }
                `}
              >
                <Fade key={edge.node.data.name.text}>
                  <section
                    className={edge.node.data.type}
                    css={`
                      padding: calc(15vw + ${rhythm(3)}) ${rhythm(0.75)};
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
                        color: white;
                      `}
                    >
                      {edge.node.data.description.text}
                    </p>
                    {edge.node.data.cta.text !== null && (
                      <Button to={edge.node.data.link.url} color="black">
                        {edge.node.data.cta.text}
                      </Button>
                    )}

                    <div
                        strength={300} 
                        css={`
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          transform: translate(-50%, -50%);
                          z-index: -2;

                          width: 100vw;
                          max-width: 800px;
                          height: 50vw;
                          max-height: calc(20vw + ${rhythm(7)});
                          overflow: hidden;
                          opacity: 0.5;

                          * {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                          }
                          img,
                          picture {
                            opacity: 0.5;
                          }
                        `}>
                        {edge.node.data.image.localFile !== null &&
                          edge.node.data.image.localFile.childImageSharp !==
                            null && (
                            <Img
                              sizes={
                                edge.node.data.image.localFile.childImageSharp
                                  .sizes
                              }
                              alt={edge.node.data.image.alt}
                            />
                          )}

                        {edge.node.data.image.localFile !== null &&
                          edge.node.data.image.localFile.childImageSharp ===
                            null && (
                            <img
                              src={edge.node.data.image.url}
                              alt={edge.node.data.image.alt}
                            />
                          )}
                    </div>
                  </section>
                </Fade>
              </div>
            )
          })}
        </article>
      )
    }}
  />
)
