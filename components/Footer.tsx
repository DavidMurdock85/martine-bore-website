import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mb/components/elements";
import React from "react";

import { Base, Col, Flex, FlexRight, Row } from "./layout";

export const Footer: React.FC = () => {
  return (
    <>
      {/*footer - top*/}

      <Base tag="h6" pt={3} className="backtotop">
        <Base tag="a" href="#header">
          Back to Top
        </Base>
      </Base>

      <Row tag="footer" className="footer" p={{ xs: 2, md: 8 }}>

        {/*footer-links*/}

        <Col className="footer-col">
          <Base pl={2} pt={2}>
            <Base className="title" tag="h5">
              Helpful Links
            </Base>
            <Flex className="footer-links" flexDirection="column">
              <Base tag="h6" className="footer-link">
                <Link href="/about">About Us</Link>
              </Base>
              <Base tag="h6" className="footer-link">
                <Link href="/contact">Contact</Link>
              </Base>
              <Base tag="h6" className="footer-link">
                <Link href="/services">Services</Link>
              </Base>
            </Flex>
          </Base>
        </Col>

        {/*footer-location*/}

        <Col>
          <Base pl={2} pt={2}>
            <Base className="title" tag="h5">
              Find Us
            </Base>
            <Base tag="h6">1462 Marine Dr, West Vancouver, BC</Base>
            <Base tag="h6">info@martineboreantiques.com</Base>
            <Base tag="h6">(604) 912-0292</Base>
          </Base>
        </Col>

        {/*footer-social media*/}

        <Col>
          <Base pl={2} pt={2}>
            <Base className="title" tag="h5">
              Follow Us
            </Base>
            <Flex className="footer-social" flexDirection="row">
              <Base mr={2} tag="h6">
                <Link href="https://www.facebook.com/MartineB2226A/">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </Base>
              <Base mr={2} tag="h6">
                <Link href="https://twitter.com/mibantiqueshop2?lang=en">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </Base>
              <Base mr={2} tag="h6">
                <Link href="https://www.instagram.com/martineboreantiques/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </Base>
            </Flex>
          </Base>
        </Col>

        {/*footer-hours*/}

        <Col className="footer-col">
          <Base pt={2}>
            <Base className="title" tag="h5">
              Hours
            </Base>
            <Base tag="h6">Tuesday - Saturday 10:00 to 5:30</Base>
            <Base tag="h6">Sunday and Monday by appoinment or chance</Base>
          </Base>
        </Col>
      </Row>
      <FlexRight pb={1} pr={1}>
        <Base tag="a" href="/admin/login">Admin Tools</Base>
      </FlexRight>
    </>
  );
};
