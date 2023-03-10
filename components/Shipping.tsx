import { Flex, Row } from "@mb/components/layout";
import React from "react";

export const Shipping: React.FC = () => {
  return (
    <Row
      flexDirection="row"
      justifyContent="flex-end"
      className="shipping-parent"
    
    >
      <Flex  mr={7} mt={1} mb={1}> we offer worldwide shipping</Flex>
    
    </Row>
  );
};
