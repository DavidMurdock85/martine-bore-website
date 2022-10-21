import Image from "next/image";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { Center, Col, Flex, Row } from "@mb/components/layout";

export const Footer: React.FC = () => {
  return (
    <Flex flexDirection="column" className="footer-parent">
      {/*back to top link*/}

      <Flex
        flexDirection="row"
        justifyContent="center"
        className="break"
        tag="hr"
      ></Flex>

      <Flex flexDirection="row" justifyContent="center" pt={2}>
        <Flex flexDirection="column" className="footer-links-parent">
          <Flex flexDirection="row" tag="a" href="#header">
            Back to Top
          </Flex>
          <Flex flexDirection="row" tag="a">
            <Nav.Link href="/">Home</Nav.Link>
          </Flex>
        </Flex>
      </Flex>

      {/*footer - body*/}

      <Row
        flexDirection="row"
        justifyContent="center"
        className="footer-body-parent"
        pl={2}
        pt={1}
        pr={2}
        pb={2}
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
        </Col>

        {/*

        <Col
          flexDirection="column"
          justifyContent="center"
          xs={12}
          md={6}
          className="footer-image"
        >
          <Row flexDirection="row" justifyContent="center">
            <Image
              src="/maps.jpeg"
              alt="map of martine bore antiques location"
              width="750px"
              height="750px"
              priority
            />
          </Row>
        </Col>

        */}
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
    </Flex>
  );
};
