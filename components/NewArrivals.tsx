import React from "react";
import { Flex, Col, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";

export const NewArrivals: React.FC = () => {
  return (
    <Flex flexDirection="column" className="new-arrivals-parent" tag="a" m={1}>
      <Row flexDirection="row" xs={12} md={6} lg={6}>
        <Col flexDirection="column">
          <Flex flexDirection="row" justifyContent="center">
            <Link tag="h2" classname="new-arrivals-link" m={8}>
              New Arrivals
            </Link>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};
