import React from 'react'
import styled from 'react-emotion'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PageTransition from 'gatsby-plugin-page-transitions'
import Overdrive from 'react-overdrive'

import Plx from 'react-plx'

import { rhythm } from '../utils/typography'

//components
import Tagline from '../components/Tagline'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Background from '../components/Background'
import Cover from '../components/Cover'
import Video from '../components/Video'

import coverImage from '../img/video_cover.png'

export default class BlogIndex extends React.Component {
  state = {
    isVideoOpen: false,
  }

  openVideo = () => {
    this.setState({isVideoOpen: true})
  }

  render() {
    console.log(this.state.isVideoOpen);
    return (
      <PageTransition
      defaultStyle={{
        transition: 'all 100ms ease-out',
        opacity: '0',
        transform: 'translateX(-100%)'
      }}
      transitionStyles={{
        entering: { opacity: '1',
        transform: 'translateX(0)' },
        entered: { opacity: '1',
        transform: 'translateX(0)' },
        exiting: { opacity: '0',
        transform: 'translateX(-100%)' },
      }}
      transitionTime={100}
      >
      <div>
        <Contact />
        {!this.state.isVideoOpen &&
        <Tagline>
          Hi! I've got
          <br /> something
          <br /> for you <button onClick={this.openVideo}>▶</button>
        </Tagline>
        }
       

      {!this.state.isVideoOpen && <Overdrive id="video"><Cover color="#FFD368" image={coverImage} size="contain"/></Overdrive>}
      {this.state.isVideoOpen && <Video/>}
        <Skills />
        <Plx parallaxData={parallaxButton}>
        <BackgroundButton><span>Background</span></BackgroundButton>
        </Plx>

        <Plx className="parallaxBackground" parallaxData={parallaxBackground}>
          <Background />
        </Plx>
        </div>
  </PageTransition>
    )
  }
}

const BackgroundButton = styled.button`
  width: 100%;
  text-align: center;
  text-transform: uppercase;

  span {
    background: linear-gradient(#666, #ccc);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media screen and (min-width: 600px) {
    position: fixed;
    left: 0;
    top: calc(100vh - ${rhythm(4)});
  }
`


const parallaxButton = [
  {
    start: 0,
    end: 200,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
]

const parallaxBackground = [
  {
    start: 50,
    end: 500,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
      {
        startValue: -50,
        endValue: 0,
        property: 'translateY',
      },
    ],
  },
]
