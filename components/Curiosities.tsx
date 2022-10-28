import React from "react";
import { Flex, Col, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";

export const Curiosities: React.FC = () => {
  return (
    <Flex flexDirection="column" className="curiosities-parent" tag="a" m={1}>
      <Row flexDirection="row" xs={12} md={6} lg={6}>
        <Col flexDirection="column">
          <Flex flexDirection="row" justifyContent="center">
            <Link className="curiosities-link" href="/categories/curiosities" m={8}>
            <Flex tag="h2">Curiosities</Flex>
            </Link>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};
