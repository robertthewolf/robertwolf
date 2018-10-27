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
        `}
      >
        <VideoCover
          videoOptions={{
            src:
              'http://res.cloudinary.com/duee6zdk4/video/upload/robertwolf.mp4',
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
        />
      </div>
    )
  }
}
