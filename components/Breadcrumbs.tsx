import React from "react";

interface BreadcrumbProps {
  breadcrumbItems: Array<BreadcrumbItemProps>;
}

interface BreadcrumbItemProps {
  url: string;
  name: string;
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
  );
}

function BreadcrumbItem({
  url,
  name,
  index,
}: {
  url: string;
  name: string;
  index: number;
}) {
  return (
    <h6
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
      key={index}
      className=""
    >
      <a itemProp="item" href={url} className="">
        <span itemProp="name" className="">
          {name}
        </span>
      </a>
      <meta itemProp="position" content={index.toString()} />
    </h6>
  );
}
