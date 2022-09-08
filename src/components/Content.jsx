import React from 'react'
import { StructuredText, Image } from 'react-datocms'
import Video from './Video'

const Content = ({ content }) => {
  return (
    <div className="prose prose-lg prose-blue post-content prose-invert">
      <StructuredText
        {...{
          data: content,
          renderBlock: ({ record }) => {
            if (record.__typename === 'ImageBlockRecord') {
              return (
                <Image {...{ lazyLoad: false, data: record.image.responsiveImage }} />
              )
            }
            if (record.__typename === 'VideoBlockRecord') {
              return <Video {...{ video: record.video }} />
            }

            return (
              <>
                <p>Don't know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            )
          }
        }}
      />
    </div>
  )
}

export default Content
