import React from 'react'
import styled from 'styled-components'
import { StaticQuery, Link, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'

//context
import { NavigationContext } from '../layouts/index.js'

export default props => (
  <StaticQuery
    query={graphql`
      query {
        dataYaml(title: { eq: "skills" }) {
          skills {
            skillset
            tagline
          }
        }
      }
    `}
    render={data => {
      return (
        <NavigationContext.Consumer>
          {({ focus }) => {
            let tagline = 'Sharp design, blazing fast website'

            data.dataYaml.skills.forEach(element => {
              if (focus === element.skillset) tagline = element.tagline
            })

            return <Tagline>{tagline}</Tagline>
          }}
        </NavigationContext.Consumer>
      )
    }}
  />
)

const Tagline = styled.h1`
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  font-size: ${rhythm(1.5)};
  line-height: 1em;
  font-weight: bold;
`
