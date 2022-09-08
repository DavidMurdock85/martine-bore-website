import { Base } from "@mb/components/layout";
import Image from "next/image";
import React from "react";
import Nav from "react-bootstrap/Nav";

export const Banner: React.FC = () => {
  return (
    <Base className="banner-parent">
      <Base className="banner-top-bar">
        <Base></Base>
      </Base>

      <Nav.Link href="/">
        <Base className="banner-logo-style">
          <Image
            src={`/images/homepage-images/logo.png`}
            alt="martine bore logo in gold"
            width="225px"
            height="205px"
            className="banner-image"
          />
        </Base>
        </Nav.Link>

      <Base className="banner-text" tag="h5">
        <Base>
          Metro Vancouvers Source of Fine Antiques, Jewelry and Art Since 1986
        </Base>
      </Base>
    </Base>
  );
};
