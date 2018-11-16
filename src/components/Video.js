import React from 'react'
import VideoCover from 'react-video-cover'

import { rhythm } from '../utils/typography'

// import poster from '../img/pineapple.svg'

export default class Video extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.open === true && this.props.open === false) {
      if (this.videoRef && this.videoRef.paused) {
        this.videoRef.play()
      } 
    }
  }

  render() {
    return (
      <div
        css={`
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          // box-shadow: 0px 0px 5px whitesmoke;
        `}
      >
        <video
        width="100%"
        height="100%"
        ref={videoRef => (this.videoRef = videoRef)}
        onTimeUpdate={this.props.timeUpdate}
        controls={this.props.open}
        // poster={poster}
        // css={`background-color: #FFD368`}
        >
          <source
            src="https://res.cloudinary.com/dpgqkw9uc/video/upload/v1542326932/robertwolf.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className={this.props.open ? 'hide' : 'show'}
          css={`
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 100%;
            background:
                linear-gradient(#4b0c49, transparent),
                linear-gradient(to top left, #FDA629, transparent),
                linear-gradient(to top right, #fd66f1, transparent);
            background-blend-mode: screen;
            background-size: cover;

            animation: slide 1s ease alternate infinite;
            opacity: 0.6;
            transition: opacity 1s ease;
            pointer-events: none;
            &.hide {
              opacity: 0;
            }

            @keyframes slide {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}
        />
      </div>
    )
  }
}
