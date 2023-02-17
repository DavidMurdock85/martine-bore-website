import { Flex, Col, Row } from "@mb/components/layout";
import React from "react";
import { Link } from "@mb/components/elements";

export const SeasonalAntiques: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      className="seasonal-antiques-parent"
      tag="a"
      m={1}
    >
      <Row flexDirection="row" className="seasonal-antiques-child" xs={12} md={6} lg={6}>
        <Col flexDirection="column">
          <Flex flexDirection="row" justifyContent="center">
            <Link className="seasonal-antiques-link" href="/categories/seasonal-antiques">
              <Flex tag="h3" >Seasonal Antiques</Flex>
            </Link>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};
