import Nav from "react-bootstrap/Nav";
import React from "react";
import { Flex, Col, Row } from "@mb/components/layout";

export const BottomNav: React.FC = () => {
  return (
    <Flex>
      <Col m={2}>
        <Row tag="a" href="#header" justifyContent="center">
          Back to Top
        </Row>
        <Row tag="a" justifyContent="center">
          <Nav.Link href="/">Home</Nav.Link>
        </Row>
      </Col>
    </Flex>
  );
};
