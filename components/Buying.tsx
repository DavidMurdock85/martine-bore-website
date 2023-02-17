import { Flex, Col, Row } from "@mb/components/layout";
import React from "react";
import Image from "next/image";

export const Buying: React.FC = () => {
  return (
    <Flex flexDirection="row" className="buying-parent" mt={2} mb={4}>
      {/*see more - drop down with text below*/}

      <Col flexDirection="column">
        <Row flexDirection="row" className="buying-title" tag="h2" m={2}>
          We&apos;re Buying
        </Row>

        <Row flexDirection="row" className="buying-text" tag="p" m={2}>
          We are actively looking for fine quality Jewelry, Paintings, Works on
          paper, Gold, Sterling silver, Bronze, Crystal, Porcelain, China,
          Crystal stemware, Chandeliers and Furniture. We are particularly
          interested in works by Lalique, Moorcroft, Meissen, Herend, Royal
          Worcester, Royal Crown Derby, Birks, Tiffanys, Waterford, Baccarat,
          Cartier, as well as fine Chinese and Japanese art. We are also
          interested in acquiring quality Canadian and European art.
        </Row>
      </Col>
    </Flex>
  );
};
