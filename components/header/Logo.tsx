import React from 'react'
import Image from 'next/image'

export const Logo: React.FC = () => {
  return (
    <div className="sm:w-20 sm:h-16  md:w-24 md:h-20 lg:w-28 lg:h-24 xl:w-32 xl:h-28 relative mb-1">
      <Image src={'/martine-logo.png'} alt="martine bore antiques logo" fill />
    </div>
  )
}
