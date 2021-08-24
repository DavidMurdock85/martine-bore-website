import "./Footer.scss";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "./elements";
import { Base, Col, Flex, Row, Split } from "./layout";

export const Footer: React.FC = () => {
  return (
    <Row tag="footer" className="footer" p={{ xs: 2, md: 8 }}>
      {/*footer-links*/}

      <Col>
        <Base pl={5} pt={2}>
          <Base className="title" tag="h5">
            Helpful Links
          </Base>
          <Flex className="footer-links" flexDirection="column">
            <Base pl={2} tag="h6">
              <NavLink className="footer-link" to="/about">
                About Us
              </NavLink>
            </Base>
            <Base pl={2} tag="h6">
              <NavLink className="footer-link" to="/contact">
                Contact
              </NavLink>
            </Base>
            <Base pl={2} tag="h6">
              <NavLink className="footer-link" to="/Services">
                Services
              </NavLink>
            </Base>
          </Flex>
        </Base>
      </Col>

      {/*footer-social media*/}

      <Col>
        <Base pl={5} pt={2}>
          <Base className="title" tag="h5">
            Follow Us
          </Base>
          <Flex className="footer-social" flexDirection="row">
            <Base tag="h6">
              <Link href="https://www.facebook.com/MartineB2226A/">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </Base>
            <Base tag="h6">
              <Link href="https://twitter.com/mibantiqueshop2?lang=en">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </Base>
            <Base tag="h6">
              <Link href="https://www.instagram.com/martineboreantiques/">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </Base>
          </Flex>
        </Base>
      </Col>
    </Row>
  );
};
