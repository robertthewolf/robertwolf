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
            subskills {
              prefix
              root
              suffix
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <NavigationContext.Consumer>
          {({ focus, toggleFocus }) => (
            <Container className={focus != 'back' ? 'active' : 'inactive'}>
              {data.dataYaml.skills.map(skillset => (
                <Skillset key={skillset.skillset} className={focus === skillset.skillset ? 'active' : 'inactive'}>
                  <h3 onClick={toggleFocus}>{skillset.skillset}</h3>
                  <ul>
                    {skillset.subskills.map(skill => (
                      <Subskill key={skill.root}>{skill.root}</Subskill>
                    ))}
                  </ul>
                </Skillset>
              ))}
              {focus != 'back' &&
              <BackButton onClick={toggleFocus}>back</BackButton>
                }
            </Container>
          )}
        </NavigationContext.Consumer>
      )
    }}
  />
)

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;


&.active .inactive {

    display: none;

}
`

const Skillset = styled.section`
  h3 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
  }

  @media screen and (max-width: 500px) {
      

    &.inactive {
        width: 50%;

        ul {
            display: none;
        }
    }

    &.active h3, &.active + div hr {
        display: none;
    }

    h3 {
      text-transform: none;
      max-width: ${rhythm(7)};
      padding: ${rhythm(0.6)};
      margin: ${rhythm(0.25)};
      border-radius: ${rhythm(0.25)};

      box-shadow: inset 0 0 ${rhythm(0.5)} rgba(0, 0, 0, 0.2);

      font-weight: 600;
      list-style: none;
      text-align: center;
      font-size: ${rhythm(0.6)};
      line-height: ${rhythm(0.6)}; 
      cursor: pointer;
    }

    &:nth-of-type(1) h3 {
      background: rgba(255, 255, 255, 0.24);
    }

    &:nth-of-type(2) h3 {
      background: rgba(255, 255, 255, 0.18);
    }

    &:nth-of-type(3) h3 {
      background: rgba(255, 255, 255, 0.12);
    }

    &:nth-of-type(4) h3 {
      background: rgba(255, 255, 255, 0.06);
    }
  }
`

const Subskill = styled.li`

@media screen and (max-width: 500px) {
  width: calc(50% - ${rhythm(0.5)});
}


  text-transform: none;
  max-width: ${rhythm(7)};
  padding: ${rhythm(0.6)};
  margin: ${rhythm(0.25)};
  border-radius: ${rhythm(0.25)};

  box-shadow: inset 0 0 ${rhythm(0.5)} rgba(0, 0, 0, 0.2);

  font-weight: 600;
  list-style: none;
  text-align: center;
  font-size: ${rhythm(0.6)};
  line-height: ${rhythm(0.6)};
  white-space: nowrap;
  cursor: pointer;

  &:nth-of-type(1) {
    background: rgba(255, 255, 255, 0.24);
  }

  &:nth-of-type(2) {
    background: rgba(255, 255, 255, 0.18);
  }

  &:nth-of-type(3) {
    background: rgba(255, 255, 255, 0.12);
  }

  &:nth-of-type(4) {
    background: rgba(255, 255, 255, 0.06);
  }
`


const BackButton = styled.button`
position: fixed;
left: 0;
bottom: 0;

width: 100%;
padding: ${rhythm(1.5)} ${rhythm(0.25)} ${rhythm(0.5)};
border: 0;
outline: none;
cursor: pointer;

background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.8) 50%, rgba(0,0,0,1) 100%);

color: white;
text-transform: uppercase;
font-weight: 600;
`