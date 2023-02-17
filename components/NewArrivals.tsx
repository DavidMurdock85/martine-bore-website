import React from "react";
import { Flex, Col, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";

export const NewArrivals: React.FC = () => {
  return (
    <Flex flexDirection="column" className="new-arrivals-parent" m={2}>
    <Row flexDirection="row" justifyContent="center" tag="h2" m={3}>
      <Flex flexDirection="row">New Arrivals</Flex>
    </Row>

    <Row flexDirection="row">
      <Col flexDirection="column" xs={12} md={6} lg={6}>
        <Flex>Products Here</Flex>
      </Col>
    </Row>

    <Row flexDirection="row" justifyContent="center">
      <Link href="/categories/new-arrivals">
        <Flex>- click for a full list of our new arrivals -</Flex>
      </Link>
    </Row>
  </Flex>
  );
};
