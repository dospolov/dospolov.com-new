import Date from '../Date2'
import Tags from './Tags'
import CoverImage from '../cover-image'
import CoverVideo from '../cover-video'

const Announce = ({
  title,
  tags,
  coverImage,
  coverVideo,
  date,
  excerpt,
  slug,
  featured
}) => {
  return (
    <>
      {coverVideo && <CoverVideo {...{ coverVideo }} />}
      {coverImage && (
        <CoverImage title={title} responsiveImage={coverImage.responsiveImage} />
      )}
      {/* {posterUrl ? (
          <BlogLink {...{ externalLink, link }} className="relative block group">
            <Poster {...{ posterUrl, alt: title }} />
          </BlogLink>
        ) : (
          <div></div>
        )} */}
      {!coverVideo && !coverImage && <div>{/* empty column */}</div>}
      <div>
        <header>
          <div className="mb-3">
            <Tags {...{ tags, featured }} />
          </div>
          <h3 className="text-2xl lg:text-3xl mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
            {title}
          </h3>
        </header>
        {excerpt && <p className="text-lg text-gray-400 flex-grow">{excerpt}</p>}
        {featured || (
          <footer className="flex items-center mt-4">
            <Date {...{ dateString: date }} />
          </footer>
        )}
      </div>
    </>
  )
}

export default Announce
