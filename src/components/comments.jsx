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

  return <DiscussionEmbed {...disqusProps} />
}

export default comments
