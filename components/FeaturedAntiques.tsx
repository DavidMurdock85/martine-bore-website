import React from "react";
import { Center, Col, Flex, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";

export const FeaturedAntiques: React.FC = () => {
  return (
    <Flex flexDirection="column" className="featured-antiques-parent" m={2}>
      <Row flexDirection="row" justifyContent="center" tag="h2" m={3}>
        <Flex flexDirection="row">Featured Antiques</Flex>
      </Row>

      <Row flexDirection="row">
        <Col flexDirection="column" xs={12} md={6} lg={6}>
        
        </Col>
      </Row>

      <Row flexDirection="row" justifyContent="center">
        <Link href="/categories/featured-antiques">
          <Flex>- click for a full list of our featured antiques -</Flex>
        </Link>
      </Row>
    </Flex>
  );
};


