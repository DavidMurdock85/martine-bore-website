import React from 'react'
import { Typography } from './Typography'

interface HeadingProps {
  text?: string
  children?: React.ReactNode;
}
export const Heading: React.FC<HeadingProps> = ({ text, children }) => {
  return (
    <Typography className="" variant="h2">
      {text && <h2>{text}</h2>}
      {children}
    </Typography>
  )
}
