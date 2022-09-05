import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

const comments = ({ title, url }) => {
  const disqusProps = {
    shortname: 'dospolov',
    config: {
      identifier: title,
      title,
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
