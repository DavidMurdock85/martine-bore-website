import { Flex, Col, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";
import React from "react";

export const ContactForm: React.FC = () => {
  return (
    <Flex flexDirection="row" className="contact-parent">
      <Col>
        <Row tag="h2" className="contact-title" justifyContent="center" m={1}>
          Contact Us
        </Row>
        <Row tag="p" className="contact-text" m={1}>
          We would love to hear from you. Let us know if we can answer any
          questions about one of our items. Do you have an item you would like
          to sell? We offer worldwide shipping.
        </Row>
        <Row justifyContent="center" className="contact-link" mb={2}>
          <Link tag="a" href="/contact" justifyContent="center">
            Click to Contact Us
          </Link>
        </Row>
      </Col>
    </Flex>
  );
};
