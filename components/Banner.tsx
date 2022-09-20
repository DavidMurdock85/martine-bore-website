import { Base, Flex, Row, Center } from "@mb/components/layout";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import { Social } from "@mb/components/Social";

export const Banner: React.FC = () => {
  return (
    <>
      <Row className="banner-parent">
        <Nav.Link href="/">
            <Image
              src={`/images/homepage-images/logo.png`}
              alt="martine bore logo in gold"
              width="50px"
              height="50px"
              className="banner-logo"
            />
        </Nav.Link>
      </Row>
    </>
  );
};
