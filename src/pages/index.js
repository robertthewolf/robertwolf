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

import facebook from '../img/facebook.png'

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
      duration: 1000,
    })
  }

  render() {
    return (
      <div
        css={`
          @media screen and (min-width: 600px) {
            padding-top: ${rhythm(2)};
          }
        `}
      >
        <Helmet>
          <title>Robert Wolf - UX/UI Designer</title>
          <meta property="og:url" content="https://rwolf.netlify.com" />
          <meta property="og:type" content="" />
          <meta property="og:title" content="Robert Wolf - UX/UI Designer" />
          <meta property="og:description" content="I am currently looking for a 3-5 months internship, starting February 2019. Let me know how can I help you." />
          <meta property="og:image" content={facebook} />
        </Helmet>
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
                    // background-image: url("data:image/svg+xml,%3Csvg width='25' height='26' viewBox='0 0 25 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.59184 0L0 26L25 13.2549L4.59184 0Z' fill='white'/%3E%3C/svg%3E%0A");
                    background-image: url("data:image/svg+xml,%3Csvg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0ZM12.564 26.0731L27.3717 17.5238L12.564 8.97461V26.0731Z'/%3E%3C/mask%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0ZM12.564 26.0731L27.3717 17.5238L12.564 8.97461V26.0731Z' fill='white'/%3E%3Cpath d='M27.3717 17.5238L27.8717 18.3899L29.3717 17.5238L27.8717 16.6578L27.3717 17.5238ZM12.564 26.0731H11.564V27.8051L13.064 26.9391L12.564 26.0731ZM12.564 8.97461L13.064 8.10858L11.564 7.24256V8.97461H12.564ZM1 17.5C1 8.3873 8.3873 1 17.5 1V-1C7.28273 -1 -1 7.28273 -1 17.5H1ZM17.5 34C8.3873 34 1 26.6127 1 17.5H-1C-1 27.7173 7.28273 36 17.5 36V34ZM34 17.5C34 26.6127 26.6127 34 17.5 34V36C27.7173 36 36 27.7173 36 17.5H34ZM17.5 1C26.6127 1 34 8.3873 34 17.5H36C36 7.28273 27.7173 -1 17.5 -1V1ZM26.8717 16.6578L12.064 25.207L13.064 26.9391L27.8717 18.3899L26.8717 16.6578ZM12.064 9.84063L26.8717 18.3899L27.8717 16.6578L13.064 8.10858L12.064 9.84063ZM13.564 26.0731V8.97461H11.564V26.0731H13.564Z' fill='white' mask='url(%23path-1-inside-1)'/%3E%3C/svg%3E%0A");
                    width: 35px;
                    height: 35px;
                    display: inline-block;
                    animation: dance 2s ease 1.5s infinite;
                    margin-left: ${rhythm(0.25)};
                    transform: translate(0%, 10%);

                    @keyframes dance {
                      0% {
                        transform: translate(0%, 10%);
                      }
                      5% {
                        transform: translate(12%, 10%);
                      }
                      10% {
                        transform: translate(0%, 10%);
                      }
                      15% {
                        transform: translate(6%, 10%);
                      }
                      20% {
                        transform: translate(0%, 10%);
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
              <span>My Background</span>
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
    y: 450,
    opacity: 0.6,
  },
})

const parallaxButton = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0.8,
        endValue: 0.4,
        property: 'opacity',
      },
      {
        startValue: 0,
        endValue: 120,
        property: 'translateY',
      },
      {
        startValue: 1,
        endValue: 2.5,
        property: 'scale',
      },
    ],
  },
]
