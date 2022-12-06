import React from "react";
import Image from "next/image";
import { Center, Col, Flex, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";

export const FeaturedAntiques: React.FC = () => {
  return (
    <Flex flexDirection="column" className="featured-antiques-parent" mt={4} mb={4}>
     
      <Row>
        <Flex
          flexDirection="column"
          justifyContent="center"
          className="featured-antiques-title"
          tag="h2"
          m={4}
        >
          Featured Antiques
        </Flex>
      </Row>

      <Row flexDirection="row">
        <Col flexDirection="column" xs={12} md={6} lg={6}>
          <Flex
            flexDirection="row"
            justifyContent="flex-start"
            className="featured-antiques-section-title"
            tag="h3"
            ml={2}
          >
            The Art Deco Period
          </Flex>

          <Flex
            flexDirection="row"
            className="featured-antiques-section-text"
            tag="p"
            m={2}
          >
            The Art Deco Period stretches from about 1910 to 1949. The Early Art
            Deco Period 1920s tends to resemble the organic shapes and motifs of
            its predecessor the Art Nouveau Period with beautiful organic motifs
            in a transition from organic to geometric designs. The Middle Art
            Deco Period during the 1930s moves into colorful geometric forms
            that celebrate art and industrial design. The Later Art Deco Period
            of the 1940s is a bit more austere and is a transitional period of
            industrial modern design with a focus on functionality over
            imbelishment before the advent of the Mid Century Period. Machines,
            architecture and art all converge to form the basis of this unique
            aesthetic.
          </Flex>
        </Col>

        <Col flexDirection="column" xs={12} md={6} lg={6}>

          <Flex
            flexDirection="row"
            justifyContent="center"
            className="featured-antiques-image"
          >
            <Image
              src="/deco-image.jpeg"
              alt="second gallery at martine boré antiques"
              width="761px"
              height="872px"
              className="featured-item-image"
            />
          </Flex>
        </Col>

        <Row>
          <Flex
            flexDirection="column"
            justifyContent="center"
            className="featured-antiques-link"
            m={1}
          >
            <Link href="/categories/featured-antiques">
              click for more info
            </Link>
          </Flex>
        </Row>

      </Row>

    </Flex>
  );
};
