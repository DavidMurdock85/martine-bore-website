import { Base } from "@mb/components/layout";
import Image from "next/image";
import React from "react";

export const NewGallery: React.FC = () => {
  return (
    <Base className="new-gallery-parent">

      <Base className="new-gallery-title" tag="h2" mt={3} mb={1}>
        <Base>Second Gallery</Base>
      </Base>

      <Base className="new-gallery-text" tag="h5" mb={2} ml={5} mr={5}>
        <Base>
          Ask about our second gallery space. We have a second space devoted to
          larger works of European and Canadian art as well as furniture. All
          visits are by appointment only. contact us at 604-912-0292 to make an
          appointment
        </Base>
      </Base>

      <Base className="new-gallery-image" mt={1} ml={1} mr={1} mb={1}>
        <Base>
          <Image
            src="/second-gallery.jpg"
            alt="second gallery at martine boré antiques"
            width="1000px"
            height="622px"
            priority
          />
        </Base>
      </Base>
      
    </Base>
  );
};
