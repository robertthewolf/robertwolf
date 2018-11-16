import React from 'react'
import styled from 'react-emotion'
import { StaticQuery, Link, graphql } from 'gatsby'
import posed from 'react-pose'

const Parent = posed.section({
  loaded: {
    x: '0%',
    delayChildren: 50,
    staggerChildren: 150,
  },
  waiting: { x: '-100%', delay: 0 },
})

const Child = posed.div({
  loaded: { y: 0, opacity: 1 },
  waiting: { y: 20, opacity: 0 },
})


import { rhythm } from '../utils/typography'

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allPrismicCategory(
          sort: {fields: [data___name___text], order: ASC},
        ) {
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
            pose={props.isOpen ? 'loaded' : 'waiting'}
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
                  // box-shadow: inset 0 0 ${rhythm(0.5)} rgba(0, 0, 0, 0.2);
                  cursor: pointer;
                  width: calc(50% - ${rhythm(0.5)});
                  max-width: ${rhythm(9)};
                  margin: ${rhythm(0.25)};
                  border-radius: ${rhythm(0.33)};
                  position: relative;

                  &:after {
                    content: '';
                    display: block;
                    padding-bottom: 100%;
                    background: white;
                    border-radius: ${rhythm(0.33)};
                    opacity: 0;
                    transition: opacity .3s ease-out;
                    pointer-events: none;
                  }

                  &:hover {
                    transform: scale(1.02) !important;
                    transform-origin: center center;
                    
                    &:after {
                      opacity: .05;
                      transition: none;
                    }
                  }

                  &:nth-of-type(1) {
                    background: #555;
                  }

                  &:nth-of-type(2) {
                    background: #444;
                  }

                  &:nth-of-type(3) {
                    background: #333;
                  }

                  &:nth-of-type(4) {
                    background: #222;
                  }

                  @media screen and (min-width: 650px) {
                    margin: ${rhythm(0.5)};
                    max-width: calc(20vw - ${rhythm(0.5)})
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
                      top: calc(50% - .5rem);
                      left: 50%;
                      transform: translate(-50%, -50%);
                      width: 50%;
                      // height: 54px;
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
                      text-transform: uppercase;
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
