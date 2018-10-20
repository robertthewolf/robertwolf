import React from 'react'
import styled from 'react-emotion'
import { StaticQuery, Link, graphql } from 'gatsby'
import { Spring } from 'react-spring'
import Overdrive from 'react-overdrive'

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
        <Container>
          {data.allPrismicCategory.edges.map(edge => (
            <Tile key={edge.node.prismicId}>
              <Link to={`/${edge.node.slugs[0]}`}>
                <img src={edge.node.data.icon.url} />
                <span>{edge.node.data.name.text}</span>
              </Link>
            </Tile>
          ))}
        </Container>
      )
    }}
  />
)

const Container = styled.section`
position: relative;
z-index: 10;
  display: flex;
  flex-wrap: wrap;
  margin: ${rhythm(0.5)};
  
  @media screen and (min-width: 600px) {
    flex-wrap: nowrap;
  }
`

const Tile = styled.section`
  box-shadow: inset 0 0 ${rhythm(0.5)} rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: calc(50% - ${rhythm(0.5)});
  margin: ${rhythm(0.25)};
  border-radius: ${rhythm(0.33)};
  position: relative;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;

    padding: ${rhythm(0.75)} ${rhythm(0.5)};
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 54px;
    height: 54px;
    display: block;
  }

  span {
    position: absolute;
    left: 50%;
    bottom: 1rem;
    transform: translateX(-50%);
    font-weight: 600;
    text-align: center;
    color: white;
    line-height: 1em;
    margin: auto 0 0;
  }

  &:nth-of-type(1) {
    background: #4A4A4A;
  }

  &:nth-of-type(2) {
    background: #3b3B2B;
  }

  &:nth-of-type(3) {
    background: #2c2c2c;
  }

  &:nth-of-type(4) {
    background: #1D1D1D;
  }

`
