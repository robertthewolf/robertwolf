import React from 'react'
import styled from 'react-emotion'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
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

import subtitles from '../components/Subtitles'

import coverImage from '../img/video_cover.png'

export default class BlogIndex extends React.Component {
  state = {
    isOpen: false,
    isVideoOpen: false,
    videoTime: 0,
  }
  componentDidMount() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  openVideo = () => {
    this.setState({ isVideoOpen: true })
  }

  handleTimeUpdate = e => {
    const time = Math.floor(e.target.currentTime * 10) / 10
    this.setState({ videoTime: time })

    if (e.target.duration - time < 1) {
      this.setState({ isVideoOpen: false })
    }
  }

  render() {
    return (
      <div>
        <Contact />
        {!this.state.isVideoOpen && this.state.videoTime === 0 && (
          <Tagline>
            Hi! I've got
            <br /> something
            <br /> for you <button onClick={this.openVideo}>▶</button>
          </Tagline>
        )}
        {this.state.videoTime !== 0 && 
          <Tagline>
            {subtitles(this.state.videoTime)}
          </Tagline>
        }
        <Cover open={this.state.isVideoOpen}>
          <Video
            open={this.state.isVideoOpen}
            timeUpdate={this.handleTimeUpdate}
          />
        </Cover>

        <Skills isOpen={this.state.isOpen} />
        <Plx parallaxData={parallaxButton}>
          <BackgroundButton>
            <span>Background</span>
          </BackgroundButton>
        </Plx>

        <Plx className="parallaxBackground" parallaxData={parallaxBackground}>
          <Background />
        </Plx>
      </div>
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
    margin-top: ${rhythm(2)};
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
