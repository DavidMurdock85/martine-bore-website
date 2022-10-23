import { Col, Flex, Row } from "@mb/components/layout";
import React from "react";
import Nav from "react-bootstrap/Nav";

const Delivery: React.FC = () => {
  return (
    <Flex flexDirection="row" className="delivery-parent">
      <Col flexDirection="column">
        <Row flexDirection="row" className="delivery-title" tag="h3" m={2}>
          Delivery
        </Row>

        <Row flexDirection="row" className="delivery-text" tag="p" m={2}>
          delivery text
        </Row>

        <Flex flexDirection="row" justifyContent="center" pt={2}>
          <Flex flexDirection="column" className="footer-links-parent">
            <Flex flexDirection="row" tag="a" href="#header">
              Back to Top
            </Flex>
            <Flex flexDirection="row" tag="a">
              <Nav.Link href="/">Home</Nav.Link>
            </Flex>
          </Flex>
        </Flex>
      </Col>
    </Flex>
  );
};

export default Delivery;
