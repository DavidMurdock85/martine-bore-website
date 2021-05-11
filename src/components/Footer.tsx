import "./Footer.scss";

import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

import { Base, Col, Flex, Row, Split } from "./layout";

//import svgZwLogo from "../../assets/svgs/zw_logo_white.svg";
//import { Image, Link } from "../../elements";
export const Footer: React.FC = () => {
  return (
    <Row tag="footer" className="footer" p={{ xs: 2, md: 8 }}>
      <Col flexDirection="column" xs={12} md={6} pr={10}>
        {/* <Image src={} alt="martine bore antiques logo"> */}
        <Split className="sitemap" mt={6}>
          <Flex flexDirection="column">
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/about">Services</NavLink>
            <NavLink to="/about"></NavLink>
          </Flex>
          <Flex flexDirection="column" ml={2}>
            <NavLink to="About">About Us</NavLink>
            <NavLink to="/Services">Services</NavLink>
            <NavLink to="/Estate Sales">Estate Sales</NavLink>
            <NavLink to="/Contact">Contact Us</NavLink>
          </Flex>
        </Split>
      </Col>
      <Col xs={12} md={6} flexDirection="column" mt={{ sm: 4 }}>
        <Flex className="right" flexDirection="column">
          <Flex className="social" mt={1}>
            <Base href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </Base>
            <Base href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
            </Base>
            <Base href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </Base>
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
};
