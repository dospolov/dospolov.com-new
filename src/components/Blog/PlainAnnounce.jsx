import React from 'react'

const PlainAnnounce = ({ slug, children }) => {
  return (
    <a
      href={`/posts/${slug}`}
      className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center py-10 mb-8 md:mb-12 hover:bg-purple-900/50"
    >
      {children}
    </a>
  )
}

export default PlainAnnounce
