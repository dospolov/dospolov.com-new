import React from 'react'
import cn from 'classnames'

const CoverVideo = ({ url, alt, slug }) => {
  const video = (
    <video
      src={url}
      preload="auto"
      muted={true}
      autoPlay={true}
      playsInline={true}
      loop={true}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug
      })}
      alt={alt}
    />
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <a href={`/posts/${slug}`} aria-label={alt}>
          {video}
        </a>
      ) : (
        video
      )}
    </div>
  )
}

export default CoverVideo
