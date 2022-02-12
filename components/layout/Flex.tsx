import React from "react";

import { Base, BaseProps } from "./Base";

interface FlexProps {
  inline?: boolean;
}

export function Flex(props: FlexProps & BaseProps) {
  return <Base display={props.inline ? "inlineFlex" : "flex"} {...props} />;
}
