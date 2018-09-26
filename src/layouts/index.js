import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

//components
import Tagline from '../components/Tagline'
import Contact from '../components/Contact'
import Skills from '../components/Skills'

//context
export const NavigationContext = React.createContext({
  focus: '',
  toggleFocus: () => {},
})

export default class Template extends React.Component {
  constructor(props) {
    super(props)

    this.toggleFocus = e => {
      const value = e.target.innerHTML
      if (value != undefined) {
        this.setState(state => ({
          focus: value,
        }))
      }
    }

    this.state = {
      focus: 'back',
      toggleFocus: this.toggleFocus,
    }
  }

  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    console.log(this.state.skillset)
    return (
      <Body>
        <Contact />
        <NavigationContext.Provider value={this.state}>
          <Tagline />
          <Skills color="blue" />
        </NavigationContext.Provider>
        {children}
      </Body>
    )
  }
}

const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;

min-height: 100vh;
// padding: ${rhythm(1.5)} ${rhythm(3 / 4)};

background: black;
color: white;

*::selection {
    background: transparent;
    color: rgba(255,255,255,0.3);
}
`