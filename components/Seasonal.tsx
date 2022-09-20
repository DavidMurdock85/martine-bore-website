import { Base } from "@mb/components/layout";
import Image from "next/image";
import React from "react";
import { Link } from "@mb/components/elements";

export const Seasonal: React.FC = () => {
  return (
    <Base className="seasonal-parent">
      
      
      <Base pl={4} tag="h5">seasonal antiques graphic link</Base>

      <Base className="seasonal-link" tag="h2" pl={4} mt={3} mb={1}>
        {/*<Link>
        <Image></Image>
        </Link>*/}
      </Base>
    </Base>
  );
};
