import React from "react";

import { Flex } from "./Flex";

export function FlexLeft(props: any) {
  return <Flex alignItems="center" justifyContent="flex-start" {...props} />;
}
