import React from "react";
import { Center, Col, Flex, Row, Split } from "@mb/components/layout";
import Image from "next/image";

export const OurStory: React.FC = () => {
  
  return (
    <Flex flexDirection="column" className="our-story-parent">
      <Row flexDirection="row">
        {/*our story - image section*/}

        <Col
          flexDirection="row"
          className="our-story-image"
          xs={12}
          md={6}
          lg={6}
        >
          <Image
            src="/about-us-copy.jpeg"
            alt="second gallery at martine boré antiques"
            width="761px"
            height="872px"
          />
        </Col>

        {/*our story - text section*/}

        <Col flexDirection="column" xs={12} md={6} lg={6}>
          <Flex
            flexDirection="row"
            justifyContent="center"
            className="our-story-title"
            tag="h2"
            m={2}
          >
            Our Story
          </Flex>
          <Flex flexDirection="row" className="our-story-text" tag="p" m={2}>
            Martine Boré Antiques Ltd. is a second generation antique business
            located in Ambelside West Vancouver. The Boré family antique
            business has been West Vancouvers source of antiques and fine art
            since the mid 1980s.
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};
