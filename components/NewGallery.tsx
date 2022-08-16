import { Base } from "@mb/components/layout";
import Image from "next/image";
import React from "react";

export const NewGallery: React.FC = () => {
  return (
    <Base>
      <Image
        src={`/images/homepage-images/logo.png`}
        alt="martine bore logo in gold"
        width="225px"
        height="205px"
        className="banner-image"
      />
      <Base tag="h5">
        Galerie Boré Ask about our second gallery space. We have a second space
        devoted to larger works of European and Canadian art as well as
        furniture. All visits are by appointment only. contact us at
        604-912-0292 to make an appointment
      </Base>
    </Base>
  );
};
