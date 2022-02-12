import React from "react";

import { Flex } from "./Flex";

export function Split(props: any) {
  return <Flex justifyContent="space-between" alignItems="center" {...props} />;
}
