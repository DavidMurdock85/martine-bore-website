import React from "react";
import { Flex, Col, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";

export const EverydayAntiques: React.FC = () => {
  return (
    <Flex flexDirection="column" className="everyday-antiques-parent" tag="a" m={1}>
      <Row flexDirection="row" xs={12} md={6} lg={6}>
        <Col flexDirection="column">
          <Flex flexDirection="row" justifyContent="center">
            <Link className="everyday-antiques-link" href="/categories/seasonal-antiques" m={8}>
            <Flex tag="h2"> Everyday Antiques</Flex>
            </Link>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};
