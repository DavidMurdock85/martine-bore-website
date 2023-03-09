import React from "react";
import { Base } from "@mb/components/layout";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mb/components/elements";

export const Social: React.FC = () => {
  return (
    <Base className="social-parent" pl={1} pt={1}>
      <Base className="social-svg">
        <Link href="https://www.instagram.com/martineboreantiques/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </Base>
    </Base>
  );
};
