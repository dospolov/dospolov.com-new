import clsx from 'clsx'
import Date from '../date'
import CoverImage from '../cover-image'
import CoverVideo from '../cover-video'

const Announce = ({ title, featured, coverImage, coverVideo, date, excerpt, slug }) => {
  const hrefLink = `/posts/${slug}`
  return (
    <div className={clsx(featured ? 'bg-green-500' : 'bg-orange-400')}>
      <div className="mb-5">
        {coverVideo && <CoverVideo coverVideo={coverVideo} slug={slug} />}
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

export default Announce
