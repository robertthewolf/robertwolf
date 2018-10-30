import React from 'react'
import VideoCover from 'react-video-cover'

import { rhythm } from '../utils/typography'

export default class Video extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.open === true) {
      this.videoRef.play()
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
        >
          <source
            src="http://res.cloudinary.com/duee6zdk4/video/upload/v1540786908/robertwolf.mp4"
            type="video/mp4"
          />
        </video>
        {/* <VideoCover
          videoOptions={{
            src:
              'http://res.cloudinary.com/duee6zdk4/video/upload/v1540786908/robertwolf.mp4',
            ref: videoRef => {
              this.videoRef = videoRef
            },
            onClick: () => {
              if (this.videoRef && this.videoRef.paused) {
                this.videoRef.play()
              } else if (this.videoRef) {
                this.videoRef.pause()
              }
            },
            onTimeUpdate: this.props.timeUpdate,
            title: 'play/pause',
          }}
        /> */}
        <div
          className={this.props.open ? 'hide' : 'show'}
          css={`
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 100%;
            background: linear-gradient(-30deg, #fd66f1 0%, #4b0c49 100%);
            background-size: cover;

            animation: slide 2s ease alternate infinite;
            opacity: 0.3;
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
