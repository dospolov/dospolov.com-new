import React from 'react'
import clsx from 'clsx'
import { Image as DatoCMSImage } from 'react-datocms'

const Image = ({ responsiveImage, title, className = '' }) => {
  return (
    <DatoCMSImage
      {...{
        lazyLoad: true,
        data: { ...responsiveImage, alt: title },
        className: clsx('relative shadow-small', className)
      }}
    />
  )
}

export default Image
