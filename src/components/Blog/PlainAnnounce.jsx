import React from 'react'

const PlainAnnounce = ({ children }) => {
  return (
    <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
      {children}
    </article>
  )
}

export default PlainAnnounce
