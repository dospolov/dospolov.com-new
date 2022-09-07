import React from 'react'
import clsx from 'clsx'

const Video = ({ video, className = '' }) => {
  return (
    <video
      {...{
        src: video.url,
        preload: 'auto',
        muted: true,
        autoPlay: true,
        playsInline: true,
        loop: true,
        className: clsx('relative shadow-small', className),
        poster: video.video.thumbnailUrl,
        alt: video.alt
      }}
    />
  )
}

export default Video
