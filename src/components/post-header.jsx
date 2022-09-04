import Date from './date'
import CoverImage from './cover-image'
import CoverVideo from './cover-video'
import PostTitle from './post-title'

export default function PostHeader({ title, coverImage, coverVideo, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        {coverVideo && <CoverVideo url={coverVideo.url} title={title} />}
        {coverImage && (
          <CoverImage title={title} responsiveImage={coverImage.responsiveImage} />
        )}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
