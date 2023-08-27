import React from 'react'
import { Typography } from './Typography'

interface TitleProps {
  text?: string
  children?: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({ text, children }) => {
  return (
    <Typography className="" variant="h2">
      {text && <h2>{text}</h2>}
      {children}
    </Typography>
  )
}
