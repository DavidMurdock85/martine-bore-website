import React from 'react'

interface ImageProps {
  image?: string
  children?: React.ReactNode
}

export const Visual: React.FC<ImageProps> = ({ children }) => {
  return (
    <div className="m-2 sm: md: lg: xl: 2xl:">
      {children}
    </div>
  )
}
