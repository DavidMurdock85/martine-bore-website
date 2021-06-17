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
import { Col, Flex, Row, Split } from "./layout";

export const Footer: React.FC = () => {
  return (
    <Row tag="footer" className="footer" p={{ xs: 2, md: 8 }}>
      
      {/*footer-links*/}
      
      <Col flexDirection="column" xs={12} md={6} pr={10}>
        <Split className="sitemap" mt={6}>
          <Flex flexDirection="column">
          
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/Services">Services</NavLink>
          </Flex>
        </Split>
      </Col>

      {/*footer-social media*/}

      <Col xs={12} md={6}  mt={{ sm: 4 }}>
        <Flex className="right">
          <Flex className="social" mt={1}>
            <Link href="https://www.facebook.com/MartineB2226A/">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="https://twitter.com/mibantiqueshop2?lang=en">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="https://www.instagram.com/martineboreantiques/">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </Flex>
        </Flex>
      </Col>

      

    </Row>
  );
};
