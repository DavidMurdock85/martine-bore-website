import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
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

        <Col className="footer-links-col">
          <Base pl={2} pt={2}>
            <Base className="footer-links-title" tag="h5">
              Helpful Links
            </Base>

            <Flex flexDirection="column">
             
              <Base className="footer-link" tag="h6">
                <Base>
                  <Link href="/contact">Contact</Link>
                </Base>
              </Base>

            </Flex>
          </Base>
        </Col>

        {/*footer-contact*/}

        <Col className="footer-contact-col">
          <Base pl={2} pt={2}>
            <Base className="contact-title" tag="h5" mt={2}>
              <Base>Find Us</Base>
            </Base>
            <Base className="contact-text" tag="h6">
              <Base>1462 Marine Dr, West Vancouver, BC</Base>
            </Base>
            <Base className="contact-text" tag="h6">
              <Base>info@martineboreantiques.com</Base>
            </Base>
            <Base className="contact-text" tag="h6">
              <Base>(604) 912-0292</Base>
            </Base>
          </Base>
        </Col>

        {/*footer-social*/}

        <Col className="footer-social-col">
          <Base pl={2} pt={2}>
            <Base className="footer-social-title" tag="h5" mr={2} mb={5}>
              Follow Us
            </Base>
            <Base className="footer-social-svg" mr={2} tag="h6">
              <Link href="https://www.instagram.com/martineboreantiques/">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </Base>
          </Base>
        </Col>

        {/*footer-hours*/}

        <Col className="footer-hours-col">
          <Base pt={2}>
            <Base className="footer-hours-title" tag="h5">
              <Base>Hours</Base>
            </Base>
            <Base className="footer-hours-text" tag="h6">
              <Base>Tuesday - Saturday 10:00 to 5:30</Base>
            </Base>
            <Base className="footer-hours-text" tag="h6">
              <Base>Sunday and Monday by appointment or chance</Base>
            </Base>
          </Base>
        </Col>
      </Row>

      <FlexRight pb={1} pr={1} mr={3}>
        <Base tag="a" href="/admin">
          Admin Tools
        </Base>
      </FlexRight>
    </>
  );
};
