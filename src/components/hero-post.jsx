import Date from './date'
import CoverImage from './cover-image'
import CoverVideo from './cover-video'

export default function HeroPost({ title, coverImage, coverVideo, date, excerpt, slug }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {coverVideo ? (
          <CoverVideo url={coverVideo.url} title={coverVideo.alt} slug={slug} />
        ) : (
          <CoverImage
            title={title}
            responsiveImage={coverImage.responsiveImage}
            slug={slug}
          />
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <a href={`/posts/${slug}`} className="hover:underline">
              {title}
            </a>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}
