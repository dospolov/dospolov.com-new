import Date from './date'
import CoverImage from './cover-image'
import CoverVideo from './cover-video'

export default function PostAnnounce({
  title,
  coverImage,
  coverVideo,
  date,
  excerpt,
  slug
}) {
  const hrefLink = `/posts/${slug}`
  return (
    <div>
      <div className="mb-5">
        {coverVideo && (
          <CoverVideo url={coverVideo.url} title={coverVideo.alt} slug={slug} />
        )}
        {coverImage && (
          <CoverImage
            slug={slug}
            title={title}
            responsiveImage={coverImage.responsiveImage}
          />
        )}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <a href={hrefLink} className="hover:underline">
          {title}
        </a>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}
