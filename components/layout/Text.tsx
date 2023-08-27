import React from 'react'
import { Typography } from './Typography'

interface TextProps {
  text?: string
  children?: React.ReactNode
}
export const Text: React.FC<TextProps> = ({ text, children }) => {
  return (
    <Typography
      className="ml-4 mt-3 text-base sm:text-sm md:text-base "
      variant="body"
    >
      {text && <p>{text}</p>}
      {children}
    </Typography>
  )
}
