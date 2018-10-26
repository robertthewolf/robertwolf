import React from 'react'
import styled from 'react-emotion'
import { StaticQuery, Link, graphql } from 'gatsby'
import posed from 'react-pose'

const Parent = posed.section({
  open: {
    x: '0%',
    delayChildren: 50,
    staggerChildren: 150,
  },
  closed: { x: '-100%', delay: 0 },
})

const Child = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 },
})

import { rhythm } from '../utils/typography'

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allPrismicCategory {
          edges {
            node {
              prismicId
              slugs
              data {
                name {
                  text
                }
                icon {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Parent
          pose={props.isOpen ? 'open' : 'closed'}
          css={`
            position: relative;
            z-index: 10;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: ${rhythm(0.5)};

            @media screen and (min-width: 600px) {
              flex-wrap: nowrap;
            }
          `}
        >
          {data.allPrismicCategory.edges.map(edge => (
            <Child
              key={edge.node.prismicId}
              css={`
                box-shadow: inset 0 0 ${rhythm(0.5)} rgba(0, 0, 0, 0.2);
                cursor: pointer;
                width: calc(50% - ${rhythm(0.5)});
                max-width: ${rhythm(10)};
                margin: ${rhythm(0.25)};
                border-radius: ${rhythm(0.33)};
                position: relative;

                &:after {
                  content: '';
                  display: block;
                  padding-bottom: 100%;
                }

                &:nth-of-type(1) {
                  background: #434343;
                }

                &:nth-of-type(2) {
                  background: #2b2b2b;
                }

                &:nth-of-type(3) {
                  background: #2b2b2b;
                }

                &:nth-of-type(4) {
                  background: #1d1d1d;
                }

                @media screen and (min-width: 600px) {
                  margin: ${rhythm(0.5)};
                }
              `}
            >
              <Link
                to={`/${edge.node.slugs[0]}`}
                css={`
                  position: absolute;
                  width: 100%;
                  height: 100%;

                  padding: ${rhythm(0.75)} ${rhythm(0.5)};
                `}
              >
                <img
                  src={edge.node.data.icon.url}
                  css={`
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 54px;
                    height: 54px;
                    display: block;
                  `}
                />
                <span
                  css={`
                    position: absolute;
                    left: 50%;
                    bottom: 1rem;
                    transform: translateX(-50%);
                    font-weight: 600;
                    text-align: center;
                    color: white;
                    line-height: 1em;
                    margin: auto 0 0;
                  `}
                >
                  {edge.node.data.name.text}
                </span>
              </Link>
            </Child>
          ))}
        </Parent>
      )
    }}
  />
)
