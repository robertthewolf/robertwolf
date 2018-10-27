import React from 'react'
import styled from 'react-emotion'
import Img from 'gatsby-image'
import Overdrive from 'react-overdrive'

import { rhythm, scale } from '../utils/typography'

export default props => {
  return (
    <Card className={props.fullwidth ? 'fullwidth' : 'rounded'}>
      {props.cover.localFile.childImageSharp !== null && (
        <Overdrive
          id={props.id + 'image'}
          css={{
            width: '100%',
            height: '100%',
          }}
        >
          <Img
            sizes={props.cover.localFile.childImageSharp.sizes}
            alt={props.cover.alt}
            css={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Overdrive>
      )}
      {props.cover.localFile.childImageSharp === null && (
        <Overdrive
          id={props.id + 'image'}
          css={{
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src={props.cover.url}
            alt={props.cover.alt}
            css={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Overdrive>
      )}
      <Overdrive id={props.id + 'gradient'}>
        <Gradient color={props.color} />
      </Overdrive>
      <Overdrive id={props.id + 'title'}>
        <Title>{props.title}</Title>
      </Overdrive>
    </Card>
  )
}

const Card = styled.section`
  &.rounded {
    margin: ${rhythm(1)};
    border-radius: 0.5rem;

    img {
      border-radius: 0.5rem;
    }
  }
  overflow: hidden;
  height: ${rhythm(12)};
  position: relative;

  @media screen and (min-width: 600px) {
    width: 40vw;
    height: ${rhythm(14)};

    &.fullwidth {
      margin: ${rhythm(2)} auto 0;
      border-radius: ${rhythm(.33)} ${rhythm(.33)} 0 0;
      width: calc(600px + ${rhythm(2)});
    }
  }
`

const Gradient = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom 0;

background: linear-gradient(0deg, ${props =>
  props.color ? props.color : '#000000'}FF 0%,  ${props =>
  props.color ? props.color : '#000000'}00 100%)
`

const Title = styled.h2`
  position: absolute;
  left: ${rhythm(1)};
  bottom: 0;
  color: white;
  max-width: 10.5em;
`
