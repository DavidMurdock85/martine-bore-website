import { Flex, Col, Row } from "@mb/components/layout";
import React from "react";
import { Link } from "@mb/components/elements";

export const Sold: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      className="sold-parent"
      tag="a"
      m={1}
    >
      <Row flexDirection="row" xs={12} md={6} lg={6}>
        <Col flexDirection="column">
          <Flex flexDirection="row" justifyContent="center">
            <Link classname="sold-link" m={8}>
              <Flex tag="h2">Sold</Flex>
            </Link>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};
