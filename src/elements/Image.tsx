import React from "react";

import { Base } from "../layout";

export function Image({ src, alt, ...props }: { src: string; alt: string; [x: string]: any }) {
  return <Base tag="img" src={src} alt={alt} {...props} />;
}
