import React from "react";

import { Base } from "../layout";

export function Link({ href, ...props }: { href?: string; [x: string]: any }) {
  return <Base tag="a" href={href} {...props} />;
}
