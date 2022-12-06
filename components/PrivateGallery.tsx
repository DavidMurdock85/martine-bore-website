import Image from "next/image";
import { Center, Col, Flex, Row } from "@mb/components/layout";
import React from "react";

export const PrivateGallery: React.FC = () => {
  return (
    <Flex flexDirection="column" className="private-gallery-parent">
      
      <Row flexDirection="row">
        {/*Featured Antiques - Title*/}

        <Col flexDirection="column" xs={12} md={6} lg={6}>
          {/*Featured Antiques - Image */}

          <Flex
            flexDirection="row"
            justifyContent="center"
            className="private-gallery-image"
          >
            <Image
              src="/private-gallery.jpeg"
              alt="second gallery at martine boré antiques"
              width="761px"
              height="872px"
              className="featured-item-image"
            />
          </Flex>
        </Col>

        <Col flexDirection="column" xs={12} md={6} lg={6}>
          <Flex
            flexDirection="row"
            justifyContent="center"
            className="private-gallery-title"
            tag="h2"
            m={2}
          >
            Private Gallery
          </Flex>

          {/*Featured Antiques - Section Text */}

          <Flex
            flexDirection="row"
            className="private-gallery-text"
            tag="p"
            m={2}
          >
            Make an appointment to see our private gallery. Showing our larger
            works of European Painting, sculpture, furniture and a unique
            assortment of design. contact us at 604-912-0292.
          </Flex>
        </Col>

        {/*Featured Antiques - Section Product Images*/}
      </Row>

    </Flex>
  );
};
