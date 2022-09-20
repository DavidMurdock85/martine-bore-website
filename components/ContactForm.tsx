import { Base, Flex, Col, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";
import React from "react";

export const ContactForm: React.FC = () => {
  return (
    <Flex flexDirection="column" className="contact-form-parent">
      <Flex
        flexDirection="row"
        className="contact-title"
        tag="h3"
        pl={2}
        mt={3}
        mb={1}
      >
        Contact Us
      </Flex>

      <Flex
        flexDirection="row"
        className="contact-form-text"
        tag="p"
        pb={2}
        mb={2}
        ml={5}
        mr={5}
      >
        Join our mailing list to recieve periotic updates on new items, seasonal
        sales and much more.
      </Flex>

      <Flex flexDirection="row" className="contact-form-link">
        <Link tag="a" href="/contact">
          Sign Up
        </Link>
      </Flex>

      <Flex flexDirection="row" className="break" tag="hr"></Flex>
    </Flex>
  );
};
