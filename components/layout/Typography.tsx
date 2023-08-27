import React, { ElementType } from 'react'

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'banner-title'
  | 'banner-sub'
  | 'body'
  | 'body-small'
  | 'small'
  | 'link'

interface Props {
  variant: Variant
  children: React.ReactNode
  className?: string
  as?: ElementType
}

const tags: Record<Variant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  'banner-title': 'h1',
  'banner-sub': 'h1',
  body: 'p',
  'body-small': 'p',
  small: 'span',
  link: 'a',
}

const sizes: Record<Variant, string> = {
  h1: 'sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl',
  h2: 'sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl',
  h3: 'sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl',
  h4: 'sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl',
  h5: 'sm:text-smlr md:text-sm lg:text-md xl:text-lg 2xl:text-xl',
  'banner-title': 'sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl',
  'banner-sub': 'sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl',
  body: 'sm:text-smlr md:text-sm lg:text-md xl:text-lg 2xl:text-xl',
  'body-small': 'sm:text-tiny md:text-smlr lg:text-sm xl:text-md 2xl:text-lg',
  small: 'sm:text-smlr md:text-sm lg:text-md xl:text-lg 2xl:text-xl',
  link: 'sm:text-smlr md:text-sm lg:text-md xl:text-lg 2xl:text-xl',
}

export const Typography = ({ variant, children, className, as }: Props) => {
  const sizeClasses = sizes[variant]
  const Tag = as || tags[variant]

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>
}
