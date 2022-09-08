import { Base } from "@mb/components/layout";
import React from "react";

export const Buying: React.FC = () => {
  return (
    <Base className="buying-parent">

      <Base className="buying-title" tag="h2" mt={3} mb={1}>
        <Base>What We Buy</Base>
      </Base>
      
      <Base className="buying-text" tag="h5" mb={2} ml={5} mr={5}>
        <Base>
          We are actively looking for fine quality Jewelry, Paintings, Works on
          paper, Gold, Sterling silver, Bronze, Crystal, Porcelain, China,
          Crystal stemware, Chandeliers and Furniture. We are particularly
          interested in works by Lalique, Moorcroft, Meissen, Herend, Royal
          Worcester, Royal Crown Derby, Birks, Tiffanys, Waterford, Baccarat,
          Cartier, as well as fine Chinese and Japanese art. We are also
          interested in acquiring quality Canadian and European art.
        </Base>
      </Base>
    </Base>
  );
};
