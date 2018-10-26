import React from 'react'
import Overdrive from 'react-overdrive'

export default () => {
  return (
    <div>
        <Overdrive id="video">
      <video
        autoPlay={true}
        css={{
          width: '100%',
        }}
        ref={video => this.fullName = video}
      >
        <source
          src="https://res.cloudinary.com/duee6zdk4/video/upload/vc_h264/v1540169467/robertwolf.mp4"
          type="video/mp4"
        />
        {/* <source src="movie.ogg" type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
      </Overdrive>
    </div>
  )
}
