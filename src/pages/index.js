import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'react-emotion'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import posed from 'react-pose'

import scrollToElement from 'scroll-to-element'

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

  ShowBackground = event => {
    scrollToElement(ReactDOM.findDOMNode(event.target), {
      offset: 0,
      ease: 'in-out-quad',
      duration: 1000
  })
  }

  render() {
    return (
      <div>
        <Contact />
        <Tagline>
          {!this.state.isVideoOpen &&
            this.state.videoTime === 0 && (
              <button
                onClick={this.openVideo}
                css={`
                  text-transform: uppercase;
                  text-align: left;
                  cursor: pointer;

                  &::after {
                    content: '';
                    background-image: url("data:image/svg+xml,%3Csvg width='25' height='26' viewBox='0 0 25 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.59184 0L0 26L25 13.2549L4.59184 0Z' fill='white'/%3E%3C/svg%3E%0A");
                    width: 25px;
                    height: 26px;
                    display: inline-block;
                    animation: dance 1s ease 1.5s infinite;
                    margin-left: ${rhythm(.25)};

                    @keyframes dance {
                      0% {
                        transform: translateX(0%) 
                      }
                      10% {
                        transform: translateX(25%)
                      }
                      20% {
                        transform: translateX(0%)
                      }
                      30% {
                        transform: translateX(12%)
                      }
                      40% {
                        transform: translateX(0%)
                      }
                    }
                  }
                `}
              >
                Hi! I've got
                <br />
                something
                <br />
                for you
              </button>
            )}

          {this.state.videoTime !== 0 && (
            <span
              dangerouslySetInnerHTML={{
                __html: subtitles(this.state.videoTime),
              }}
            />
          )}
        </Tagline>
        <Cover open={this.state.isVideoOpen}>
          <Video
            open={this.state.isVideoOpen}
            time={this.state.videoTime}
            timeUpdate={this.handleTimeUpdate}
          />
        </Cover>
        <VideoOffset pose={this.state.isVideoOpen ? 'open' : 'closed'}>
          <Skills isOpen={this.state.isOpen} />
          <Plx parallaxData={parallaxButton}>
            <BackgroundButton onClick={this.ShowBackground}>
              <span>Background</span>
            </BackgroundButton>
          </Plx>
            <Background />
        </VideoOffset>
      </div>
    )
  }
}

const BackgroundButton = styled.button`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

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

const VideoOffset = posed.div({
  closed: {
    y: 0,
    opacity: 1,
  },
  open: {
    y: 400,
    opacity: 0.3,
  },
})

const parallaxButton = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0.8,
        endValue: .4,
        property: 'opacity',
      },
      {
        startValue: 0,
        endValue: 120,
        property: 'translateY',
      },
      {
        startValue: 1,
        endValue: 3,
        property: 'scale',
      },
    ],
  },
]