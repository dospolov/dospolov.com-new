import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

const comments = ({ post, url }) => {
  const disqusProps = {
    shortname: 'dospolov',
    config: {
      identifier: post.title,
      title: post.title,
      url
    }
  }

  return (
    <div className="my-8">
      <DiscussionEmbed {...disqusProps} />
    </div>
  )
}

export default comments
