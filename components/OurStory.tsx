import {
  Base,
  Flex
} from "@mb/components/layout";
import React from "react";
import Image from "next/image";

export const OurStory: React.FC = () => {
  return (
    <Flex flexDirection="row" className="about-parent">
        <Flex flexDirection="column"
          className="title-verticle-sideways"
          tag="h3"
          pl={2}
          pt={2}
          pr={2}
          pb={2}
        >
          Our Story
        </Flex>

        <Flex flexDirection="column" className="about-image" pl={2} pt={2} pr={2} pb={2}>
          <Image
            src="/about-us-copy.jpeg"
            alt="second gallery at martine boré antiques"
            width="761px"
            height="872px"
            className="featured-item-image"
            priority
          />
        </Flex>

        <Flex flexDirection="row" className="our-story-text" tag="p" pl={2} pr={2} pt={2} pb={1}>
          <Flex flexDirection="column">
            Martine Boré Antiques Ltd. is a second generation antique business
            located in Ambelside West Vancouver. The Boré family antique
            business has been West Vancouvers source of antiques and fine art
            since the mid 1980s.
          </Flex>
        </Flex>

        <Flex flexDirection="column"
          className="title-verticle-sideways"
          tag="h3"
          pl={4}
          pb={1}
          mt={3}
          mb={1}
        >
          <Base>Our Story</Base>
        </Flex>
      
    </Flex>
  );
};
