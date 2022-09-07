import React from 'react'
import Video from '../Video'
import Image from '../Image'
import Content from './Content'
import Date from '../Date'

const Post = ({ title, excerpt, coverVideo, slug, coverImage, content, date }) => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      {excerpt && <p className="text-xl leading-relaxed mb-4">{excerpt}</p>}
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        {coverVideo && <Video {...{ video: coverVideo, slug }} />}
        {coverImage && (
          <Image
            {...{
              title,
              responsiveImage: coverImage.responsiveImage
            }}
          />
        )}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="prose prose-lg prose-blue post-content">
          <Content {...{ content }} />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="mb-6 text-lg">
            <Date {...{ dateString: date }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
