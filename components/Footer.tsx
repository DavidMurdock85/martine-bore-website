import Image from "next/image";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { Col, Flex, Row } from "@mb/components/layout";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mb/components/elements";
import { Info } from "@mb/components/Info";
import { BottomNav } from "@mb/components/BottomNav";

export const Footer: React.FC = () => {
  return (
    <Flex flexDirection="column" className="footer-parent">
      <Col>
        <Info /> {/*notices*/}
        <BottomNav />
        <Row tag="h2" className="footer-title" justifyContent="center" m={1}>
          Plan Your Visit
        </Row>
        <Row
          flexDirection="row"
          justifyContent="center"
          className="footer-body-parent"
          ml={2}
          mt={1}
          mr={2}
          mb={2}
        >
          <Col
            xs={12}
            md={6}
            flexDirection="column"
            className="footer-text-parent"
            p={4}
          >
            <Flex flexDirection="column" className="footer-contact" pb={2}>
              <Flex flexDirection="row" tag="h4">
                Find Us
              </Flex>
              <Flex flexDirection="row">
                <Flex flexDirection="column" tag="p">
                  <Flex flexDirection="row">
                    1462 Marine Dr, West Vancouver, BC
                  </Flex>
                  <Flex flexDirection="row">info@martineboreantiques.com</Flex>
                  <Flex flexDirection="row">(604) 912-0292</Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDirection="column" className="footer-hours">
              <Flex flexDirection="row" tag="h4">
                Hours
              </Flex>
              <Flex flexDirection="row">
                <Flex flexDirection="column" tag="p">
                  <Flex flexDirection="row">
                    Tuesday - Saturday 10:00 to 5:30
                  </Flex>
                  <Flex flexDirection="row">
                    Sunday and Monday by appointment
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDirection="row">Parking Available in the Back</Flex>
            <Flex flexDirection="column" mt={2}>
              <Flex flexDirection="row" tag="h4">
                Social Media
              </Flex>
              <Flex flexDirection="row" className="nav-social" mt={1}>
                <Link href="https://www.instagram.com/martineboreantiques/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </Flex>
            </Flex>
          </Col>
          <Col
            flexDirection="column"
            justifyContent="center"
            xs={12}
            md={6}
            className="footer-image"
          >
            <Row flexDirection="row" justifyContent="center" m={2}>
              <Image
                src="/location-image.jpg"
                alt="map of martine bore antiques location"
                width="750px"
                height="750px"
                priority
              />
            </Row>
          </Col>
        </Row>
        <Flex
          flexDirection="row"
          justifyContent="flex-end"
          className="footer-admin"
          pb={1}
          pr={1}
          mr={3}
        >
          <Nav.Link href="/admin">Admin Tools</Nav.Link>
        </Flex>
      </Col>
    </Flex>
  );
};
