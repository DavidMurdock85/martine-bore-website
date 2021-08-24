import React from "react";
import { Route } from "react-router-dom";

import { categories } from "../api/categories";
import { Flex } from "../components/layout";
import { ProductCategory } from "../components/ProductCategory";


export const ArtCategories = () => {
  return (
    <Flex flexDirection="column" expand="width">
      {Object.values(categories).map((categories) => {
        return <Route path={`/categories/${categories.route}`} component={() => {
          return <ProductCategory title={categories.title} categoryProducts={categories.list} breadcrumbs={categories.breadcrumbs ? categories.breadcrumbs : []} />
        }} />
      })}
    </Flex>
  );
};

