import { Base } from "@mb/components/layout";
import Image from "next/image";
import React from "react";

export const Banner: React.FC = () => {
  return (
    <Base className="banner-style">
      <Base className="banner-image-deco">
        <Image
          src={`/images/homepage-images/logo.png`}
          alt="martine bore logo in gold"
          width="225px"
          height="205px"
          className="banner-image"
        />
      </Base>
      <Base tag="h5" className="banner-subtitle">
        Metro Vancouvers Source of Fine Antiques, Jewelry and Art Since 1986
      </Base>
    </Base>
  );
};
