import React from "react";
import { Col, Flex, Row } from "@mb/components/layout";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <Flex flexDirection="column" className="about-parent" mt={4}>
      
      <Row
            flexDirection="row"
            justifyContent="center"
            className="our-story-title"
            tag="h2"
            m={2}
          >
            About Us
          </Row>
      
      <Row flexDirection="row">
        
       

        {/*about - text section*/}

        <Col flexDirection="column" xs={12} md={6} lg={6}>
         

          <Flex  flexDirection="row"
            justifyContent="flex-start"
            tag="h3"
            m={2}>A Family Tradition</Flex>

          <Flex flexDirection="row" className="about-text" tag="p" m={2}>
            Martine Boré Antiques Ltd. is a second generation antique business
            located in Ambleside West Vancouver. The Boré family antique
            business has been West Vancouvers source of antiques and fine art
            since the mid 1980s.
          </Flex>
        </Col>

         {/*about - image section*/}

         <Col flexDirection="row" className="about-image" xs={12} md={6} lg={6}>
          <Image
            src="/about-image.jpeg"
            alt="second gallery at martine boré antiques"
            width="761px"
            height="872px"
          />
        </Col>

      </Row>
    </Flex>
  );
};
