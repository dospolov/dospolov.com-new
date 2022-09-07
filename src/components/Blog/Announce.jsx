import Video from '../Video'
import Image from '../Image'
import Tags from './Tags'
import Date from '../Date'

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
      {coverVideo && (
        <Video
          {...{
            video: coverVideo,
            slug,
            className: 'hover:shadow-medium transition-shadow duration-200'
          }}
        />
      )}
      {coverImage && (
        <Image
          {...{
            title,
            responsiveImage: coverImage.responsiveImage,
            className: 'hover:shadow-medium transition-shadow duration-200'
          }}
        />
      )}
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
