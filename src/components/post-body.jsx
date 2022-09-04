import { StructuredText, Image } from 'react-datocms'
import CoverVideo from './cover-video'
import Date from './date'

export default function PostBody({ content, date }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-lg prose-blue post-content">
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            if (record.__typename === 'ImageBlockRecord') {
              return <Image lazyLoad={false} data={record.image.responsiveImage} />
            }
            if (record.__typename === 'VideoBlockRecord') {
              return <CoverVideo coverVideo={record.video} />
            }

            return (
              <>
                <p>Don't know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            )
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </div>
  )
}
