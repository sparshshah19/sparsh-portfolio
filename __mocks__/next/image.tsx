import React from 'react'
const NextImage = ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
  <img src={typeof src === 'string' ? src : ''} alt={alt} {...props} />
)
export default NextImage
