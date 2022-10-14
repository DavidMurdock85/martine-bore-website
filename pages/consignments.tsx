import { Flex, Col, Row } from "@mb/components/layout";
import React from "react";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";

export const Consignments: React.FC = () => {
  return (
    <Flex flexDirection="row" className="consignments-parent">
      <Col flexDirection="column">
        <Row flexDirection="row" className="consignments-title" tag="h3" m={2}>
          Consignments
        </Row>

        <Row flexDirection="row" className="consignments-text" tag="p" m={2}>
          consignments text
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
