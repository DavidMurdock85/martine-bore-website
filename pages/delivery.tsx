import React from "react";
import Nav from "react-bootstrap/Nav";
import { Col, Flex, Row } from "@mb/components/layout";

const Delivery: React.FC = () => {
  return (
    <Flex flexDirection="row" className="delivery-parent">
      <Col flexDirection="column">
        <Row flexDirection="row" className="delivery-title" tag="h3" m={2}>
          Delivery
        </Row>

        <Row flexDirection="row" className="delivery-text" tag="p" m={2}>
          Martine Bore Antiques offers an array of delivery options when you
          purchase from us. We want your experience to be as smooth as possible.
          We partner with a number of reputable shipping companies who can
          deliver your items with care for a reasonable price. Whether your
          located next door or on the other side of the world we want you to
          receive your purchase in one piece. To inquire about shipping quotes
          for a specific item, email us at info@martineboreantiques.com with the
          title of the item your interested in and we will respond as soon as we
          are able. Usually we will respond within 24hrs.
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
