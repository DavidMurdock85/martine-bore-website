import React from "react";

import { Flex } from "./Flex";

export function FlexRight(props: any) {
  return <Flex justifyContent="flex-end" alignItems="center" {...props} />;
}
