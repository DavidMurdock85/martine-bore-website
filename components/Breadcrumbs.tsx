import { Base, Flex } from "@mb/components/layout";
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
    <Flex
      ml={1}
      tag="nav"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
      className="c-breadcrumb breadcrumb__list"
    >
      {breadcrumbItems.map((item, index, array) => (
        <Flex key={index}>
          <BreadcrumbItem {...item} index={index + 1} key={index} />
          {array.length - 1 !== index && <Base mx={1}>/</Base>}
        </Flex>
      ))}
    </Flex>
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
    <Base
      tag="h6"
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
      key={index}
      className="breadcrumb-element"
    >
      <Base
        tag="a"
        itemProp="item"
        href={url}
        className="breadcrumb-element__link"
      >
        <Base tag="span" itemProp="name" className="breadcrumb-element__name">
          {name}
        </Base>
      </Base>
      <meta itemProp="position" content={index.toString()} />
    </Base>
  );
}
