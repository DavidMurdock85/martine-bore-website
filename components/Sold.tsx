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
      <Row flexDirection="row" className="sold-child" xs={12} md={6} lg={6}>
        <Col flexDirection="column">
          <Flex flexDirection="row" justifyContent="center">
            <Link className="sold-link" href="/categories/sold">
              <Flex tag="h3">Sold</Flex>
            </Link>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};
