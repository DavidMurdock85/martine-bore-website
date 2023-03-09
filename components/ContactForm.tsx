import { Flex, Col, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";
import React from "react";

export const ContactForm: React.FC = () => {
  return (
    <Flex flexDirection="row" className="contact-form-parent">
      <Col flexDirection="column">
        <Row flexDirection="row" className="contact-title" tag="h2" m={1}>
          Contact Us
        </Row>
        <Row flexDirection="row" className="contact-form-text" tag="p" m={1}>
          Join our mailing list to recieve periotic updates on new items,
          seasonal sales and much more.
        </Row>
        <Row
          flexDirection="row"
          justifyContent="center"
          className="contact-form-link"
        >
          <Link
            tag="a"
            href="/contact"
            flexDirection="row"
            justifyContent="center"
          >
            Sign Up
          </Link>
        </Row>
      </Col>
    </Flex>
  );
};
