import { Base } from "@mb/components/layout";
import React from "react";

export function Image({ src, alt, ...props }: { src: string; alt: string; [x: string]: any }) {
  return <Base tag="img" src={src} alt={alt} {...props} />;
}
