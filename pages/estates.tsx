import { Col, Flex, Row } from "@mb/components/layout";
import React from "react";
import Nav from "react-bootstrap/Nav";

const Estates: React.FC = () => {
  return (
    <Flex flexDirection="row" className="estates-parent">
      <Col flexDirection="column">
        <Row flexDirection="row" className="estates-title" tag="h3" m={2}>
          Estates
        </Row>

        <Row flexDirection="row" className="estates-text" tag="p" m={2}>
          Do you have an estate that you would like us to veiw? Martine Bore
          Antiques Ltd. Is looking to buy quality items for our expanding
          gallery space. We buy single items and entire estates. We make house
          visits in the Greater Vancouver Area and can assest items on the spot
          and will offer a fair market price if were interested. Contact us for
          more information about what were looking to purchase.
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

export default Estates;
