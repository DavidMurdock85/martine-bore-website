import { Base } from "@mb/components/layout";
import React from "react";

export const NewArrivals: React.FC = () => {
  return (
    <Base className="new-arrivals-parent">

      <Base tag="h3" pl={4} pb={1} mt={3} mb={1}>
        <Base>New Arrivals</Base>
      </Base>

      <Base tag="p"  pl={4}>product images heres</Base>
      {/*images displayed in carousel format - 3 images in phone - 5 in desktop*/}

      {/*
        . Dynamic Value to populate new Arrivals
        . Limit List to 10 and make a clickable button option in nav bar
        */}
    </Base>
  );
};
