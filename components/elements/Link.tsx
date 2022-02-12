import { Base } from "@mb/components/layout";
import React from "react";

export function Link({ href, ...props }: { href?: string; [x: string]: any }) {
  return <Base tag="a" href={href} {...props} />;
}
