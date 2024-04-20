import React from 'react'
import clsx from 'clsx'
import { SRCImage } from 'react-datocms'

const Image = ({ responsiveImage, title, className = '' }) => {
  console.log(responsiveImage)
  return (
    <SRCImage
      {...{
        lazyLoad: false,
        data: { ...responsiveImage, alt: title },
        className: clsx('relative shadow-small max-h-svh', className)
      }}
    />
  )
}

export default Image
