import CoverImage from './cover-image'
import CoverVideo from './cover-video'
import PostTitle from './post-title'

export default function PostHeader({ title, excerpt, coverImage, coverVideo }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {excerpt && <p className="text-xl leading-relaxed mb-4">{excerpt}</p>}
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        {coverVideo && <CoverVideo coverVideo={coverVideo} />}
        {coverImage && (
          <CoverImage title={title} responsiveImage={coverImage.responsiveImage} />
        )}
      </div>
    </>
  )
}
