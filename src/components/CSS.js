import React from 'react'
import styled from 'react-emotion'

export const Animation = props => {
    const id = Math.random().toString(36).replace(/[0-9]/g, '').substr(2, 9);
  return (
    <Animate
      css={{
        animationName: props.name ? props.name : id,
        animationDuration: props.duration ? props.duration : '1s',
        animationTimingFunction: props.easing ? props.easing : 'ease',
        animationDelay: props.delay ? props.delay : '0s',
        animationFillMode: props.fill ? props.fill : 'forwards',
      }}
      id={id}
      from={props.from ? props.from : ''}
      to={props.to ? props.to : ''}
    >
      {props.children}
    </Animate>
  )
}

const Animate = styled.div`

${props => props.from};

  @keyframes ${props => props.id} {
      from {
        ${props => props.from};
      }
      to {
        ${props => props.to};
      }
  }

  ${props => props.from};
`
