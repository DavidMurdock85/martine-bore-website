import { Base } from "@mb/components/layout";
import Image from "next/image";
import React from "react";

export const FeaturedItem: React.FC = () => {
  return (
    <Base className="featured-item-parent">
      <Base className="featured-item-title" tag="h2" mt={3} mb={1}>
        <Base>Featured Item</Base>
      </Base>
      <Base mt={1} ml={1} mr={1} mb={1}>
        <Base>
          <Image
            src="/second-gallery.jpg"
            alt="second gallery at martine boré antiques"
            width="1000px"
            height="622px"
            className="featured-item-image"
            priority
          />
        </Base>
      </Base>
      <Base className="featured-item-text" tag="h5" mb={2} ml={5} mr={5}>
        <Base>
          Meissen Porcelain has a history stretching back to 1709 when it became
          Europes first hard paste Porcelain. The workshops at Meissen are
          renowned for the quality of of their craftsmanship and attention to
          detail. Popular patterns include Blue Onion.
        </Base>
      </Base>
    </Base>
  );
};
