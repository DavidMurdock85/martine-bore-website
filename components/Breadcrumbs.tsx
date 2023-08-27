import React from 'react'
import { Typography } from '@mb/components/layout/Typography'

interface BreadcrumbProps {
  breadcrumbItems: Array<BreadcrumbItemProps>
}

interface BreadcrumbItemProps {
  url: string
  name: string
}

export function Breadcrumb({ breadcrumbItems }: BreadcrumbProps) {
  return (
    <nav
      itemScope
      itemType="https://schema.org/BreadcrumbList"
      className="ml-1"
    >
      {breadcrumbItems.map((item, index, array) => (
        <div key={index}>
          <BreadcrumbItem {...item} index={index + 1} key={index} />
          {array.length - 1 !== index && <div className="mx-1">/</div>}
        </div>
      ))}
    </nav>
  )
}

function BreadcrumbItem({
  url,
  name,
  index,
}: {
  url: string
  name: string
  index: number
}) {
  return (
    <Typography
      variant="h5"
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
      key={index}
    >
      <a itemProp="item" href={url}>
        <span itemProp="name">{name}</span>
      </a>
      <meta itemProp="position" content={index.toString()} />
    </Typography>
  )
}
