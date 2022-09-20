import { Base } from "@mb/components/layout";
import Image from "next/image";
import React from "react";

export const EverydayAntiques: React.FC = () => {
  return (
    <Base className="everyday-antiques-parent">
      
      <Base pl={4} tag="h5">everyday antiques graphic link</Base>
      
      <Base className="everyday-antiques-link" tag="h2" pl={4} mt={3} mb={1}>
        {/*<Link>
        <Image></Image>
        </Link>*/}
      </Base>
    </Base>
  );
};
