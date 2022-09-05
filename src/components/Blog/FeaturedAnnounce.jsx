import React from 'react'
import CtaBackground from './CtaBackground'

const FeaturedAnnounce = ({ slug, children }) => {
  return (
    <a href={`/posts/${slug}`} className="block mb-8 md:mb-12 group">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12 group-hover:bg-purple-700">
          <div
            className="absolute right-0 top-0 -ml-40 pointer-events-none"
            aria-hidden="true"
          >
            <CtaBackground />
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              {children}
            </article>
          </div>
        </div>
      </div>
    </a>
  )
}

export default FeaturedAnnounce
