import React from 'react'
import clsx from 'clsx'

const CoverVideo = ({ coverVideo, slug }) => {
  const video = (
    <video
      src={coverVideo.url}
      preload="auto"
      muted={true}
      autoPlay={true}
      playsInline={true}
      loop={true}
      className={clsx('relative shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug
      })}
      poster={coverVideo.video.thumbnailUrl}
      alt={coverVideo.alt}
    />
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <a href={`/posts/${slug}`} aria-label={coverVideo.alt}>
          {video}
        </a>
      ) : (
        video
      )}
    </div>
  )
}

export default CoverVideo
