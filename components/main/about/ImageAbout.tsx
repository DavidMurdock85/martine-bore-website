import React from 'react'
import Image from 'next/image'

export const ImageAbout: React.FC = () => {
  return (
    <Image
      src="/about-image.jpeg"
      alt="second gallery at martine boré antiques"
      width={610}
      height={540}
    />
  )
}
