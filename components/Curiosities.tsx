import React from "react";
import { Flex, Col, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";

export const Curiosities: React.FC = () => {
  return (
    <Flex flexDirection="column" className="curiosities-parent" tag="a" m={1}>
      <Row
        flexDirection="row"
        className="curiosities-child"
        xs={12}
        md={6}
        lg={6}
      >
        <Col flexDirection="column">
          <Flex flexDirection="row" justifyContent="center">
            <Link
              href="/categories/curiosities"
            >
              <Flex tag="h3">Curiosities</Flex>
            </Link>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};
