import { Flex } from "@mb/components/layout";
import React from "react";
import Image from "next/image";

export const Buying: React.FC = () => {
  return (
    <Flex flexDirection="row" className="buying-parent">
      {/*see more - drop down with text below*/}

      <Flex flexDirection="column">
        <Flex
          flexDirection="row"
          className="buying-title"
          tag="h3"
          pl={2}
          pt={1}
          pr={1}
          pb={2}
        >
          Were Buying
        </Flex>

        <Flex
          flexDirection="row"
          className="buying-text"
          tag="p"
          pl={3}
          pt={0}
          pr={0}
          pb={3}
        >
          We are actively looking for fine quality Jewelry, Paintings, Works on
          paper, Gold, Sterling silver, Bronze, Crystal, Porcelain, China,
          Crystal stemware, Chandeliers and Furniture. We are particularly
          interested in works by Lalique, Moorcroft, Meissen, Herend, Royal
          Worcester, Royal Crown Derby, Birks, Tiffanys, Waterford, Baccarat,
          Cartier, as well as fine Chinese and Japanese art. We are also
          interested in acquiring quality Canadian and European art.
        </Flex>
      </Flex>
    </Flex>
  );
};
