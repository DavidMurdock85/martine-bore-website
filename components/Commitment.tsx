import { Base } from "@mb/components/layout";
import React from "react";

export const Commitment: React.FC = () => {
  return (
    <Base className="commitment-parent">
      <Base className="flex-group-2">
        <Base pt={2.5}>
          <Base tag="h3" pb={2}>
            <Base>Its</Base>
          </Base>
          <Base tag="h3" pb={2} pl={2}>
            <Base>About</Base>
          </Base>
          <Base id="quality" tag="h3" pb={2} pl={4}>
            <Base className="title-decorated">Quality</Base>
          </Base>
        </Base>

        <Base className="commitment-text" tag="p" pl={5} pr={5} pt={5} pb={3}>
          <Base>
            Quality is a very important part of our process. We bring our
            clients unique artistic works that are thoughfully sourced and
            thoroughly curated. We search locally and the world over for works
            of exceptional quality and uniqueness.  
          </Base>
        </Base>
      </Base>
    </Base>
  );
};
