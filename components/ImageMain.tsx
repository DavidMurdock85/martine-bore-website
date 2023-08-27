import React from 'react'
import Image from 'next/image'

export const ImageMain: React.FC = () => {
  return (
    <Image
      src={`/main-image.jpeg`}
      alt="A photo of the Martine Boré Antiques Gallery in Ambleside West Vancouver."
      width={2000}
      height={1500}
      priority
    />
  )
}
