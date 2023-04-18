import { Flex, Col, Row } from "@mb/components/layout";
import React from "react";

export const Buying: React.FC = () => {
  return (
    <Flex flexDirection="row" className="buying-parent" mt={2} mb={4}>
      <Col>
        <Row justifyContent="center" className="buying-title" tag="h2">
          We&apos;re Buying
        </Row>

        <Row justifyContent="flex-start" tag="h3" mt={2}>
          What Were Looking For
        </Row>

        <Row tag="p" className="buying-text" m={1}>
          We are actively looking for fine quality Jewelry, Paintings, Works on
          paper, Fine Silver, Bronze, Crystal, Porcelain, China, Stemware,
          Chandeliers and Furniture. We are particularly interested in works by
          Lalique, Moorcroft, Meissen, Herend, Royal Worcester, Royal Crown
          Derby, Birks, Tiffanys, Waterford, Baccarat, Cartier, as well as fine
          Chinese and Japanese art. We are also interested in acquiring quality
          Canadian and European art.
        </Row>

        <Row justifyContent="flex-start" tag="h3" mt={2}>
          How To Get In Touch
        </Row>

        <Row tag="p" className="buying-text" m={1}>
          If you have a work you would like to sell us we can be reach by phone
          at (604) 912-0292 or email at info@martineboreantiques.com. Send a
          picture of your items along with any relevant information about their
          condition and well get back to you as soon as we are able. If you are
          unable to send a picture feel free to give us a call and we can
          discuss them over the phone.
        </Row>
      </Col>
    </Flex>
  );
};
