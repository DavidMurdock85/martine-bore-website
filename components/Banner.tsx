import { Base, Flex, Row, Center } from "@mb/components/layout";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import { Navigation } from "@mb/components/Navigation";

export const Banner: React.FC = () => {
  return (
    <Flex flexDirection="column" className="banner-parent">
      {/*Banner Logo - Home Link*/}

      <Nav.Link href="/"   className="banner-logo">
        <Flex
          flexDirection="row"
          justifyContent="center"
          className="banner-logo"
        >
          <Image
            src={`/images/homepage-images/logo.png`}
            alt="martine bore logo in gold"
            width="100px"
            height="90px"
            className="banner-logo"
          />
        </Flex>
      </Nav.Link>

      <Flex
        flexDirection="row"
        justifyContent="center"
        tag="h6"
        className="banner-sub"
      >
        Metro Vancouver&apos;s Leading Source of Antiques and Fine Art
      </Flex>
      

      <Flex flexDirection="row" className="banner-nav">
        <Navigation />
      </Flex>
    </Flex>
  );
};
