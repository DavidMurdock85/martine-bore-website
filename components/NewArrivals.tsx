import React from "react";
import { Flex, Col, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";

export const NewArrivals: React.FC = () => {
  return (
    <Flex flexDirection="column" className="new-arrivals-parent" tag="a" m={1}>
      <Row flexDirection="row" className="new-arrivals-child" xs={12} md={6} lg={6} >
        <Col flexDirection="column">
          <Flex flexDirection="row" justifyContent="center">
            <Link className="new-arrivals-link" href="/categories/new-arrivals" m={8}>
            <Flex tag="h2">New Arrivals</Flex>
            </Link>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};
