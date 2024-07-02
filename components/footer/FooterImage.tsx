import React from 'react'
import Image from 'next/image'

export const FooterImage: React.FC = () => {
  return (
    <>
      <Image
        src="/location-image.jpg"
        alt="map of martine bore antiques location"
        width={400}
        height={400}
        priority
      />
    </>
  )
}
