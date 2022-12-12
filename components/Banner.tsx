import { Flex } from "@mb/components/layout";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import { Navigation } from "@mb/components/Navigation";

export const Banner: React.FC = () => {
  return (
    <Flex flexDirection="column" className="banner-parent">
      {/*Banner Logo - Home Link*/}

      <Nav.Link href="/" className="banner-logo">
        <Flex
          flexDirection="row"
          justifyContent="center"
          className="banner-logo"
        >
          <Image
            src="/martine-logo.png"
            alt="martine bore antiques logo"
            width="180px"
            height="160px"
            className="banner-logo"
          />
        </Flex>
      </Nav.Link>

      <Flex flexDirection="row" className="banner-nav">
        <Navigation />
      </Flex>

      <Flex>
        
      </Flex>
    </Flex>
  );
};
