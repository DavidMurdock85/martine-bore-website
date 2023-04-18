import { Flex, Row } from "@mb/components/layout";
import React from "react";

export const Shipping: React.FC = () => {
  return (
    <Row
      flexDirection="row"
      justifyContent="center"
      className="shipping-parent"
      tag="h6"
    
    >
      <Flex  mr={7} mt={1} mb={1}>we ship worldwide</Flex>
    
    </Row>
  );
};
