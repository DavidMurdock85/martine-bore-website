import { Base } from "@mb/components/layout";
import Image from "next/image";
import React from "react";

export const PrivateGallery: React.FC = () => {
  return (
    <Base className="private-gallery-parent">

      <Base className="private-gallery-title" tag="h3" pl={4}>
        <Base>Private Gallery</Base>
      </Base>

      <Base className="" tag="p" pl={4} pt={1} pr={4} pb={2}>
        <Base>
          Make an appointment to see our private gallery. Showing our larger
          works of European Painting, sculpture, furniture and a unique
          assortment of design. contact us at 604-912-0292.
        </Base>
      </Base>

      <Base className="private-gallery-image" mt={1} ml={1} mr={1} mb={1}>
        <Image
          src="/second-gallery.jpg"
          alt="private gallery at martine boré antiques"
          width="1000px"
          height="622px"
          priority
        />
      </Base>
    </Base>
  );
};
