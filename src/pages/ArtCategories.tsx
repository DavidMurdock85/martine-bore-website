import React from "react";
import { Route } from "react-router-dom";
import { products } from "../api/product";
import { Flex } from "../components/layout";
import { ProductCategory } from "../components/ProductCategory";

export const ArtCategories = () => {
  return (
    <Flex flexDirection="column" expand="width">
      {products.map((product) => {

/*console.log(product.route)*/

        return <Route path={`/categories/${product.route}`} component={() => {
          return <ProductCategory title={product.title} products={product.list}/>
        }} />
      })}
    </Flex>
  );
};

