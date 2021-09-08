import "./ProductCategory.scss";
import "react-image-lightbox/style.css";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { products } from "../api/products";
import { Breadcrumb } from "./Breadcrumbs";
import { Image } from "./elements";
import { Base, Col, Flex, Row, Split } from "./layout";

// Product Catgory

export const ProductCategory = ({ title, breadcrumbs, categoryProducts }) => {

  return (

    <Flex className="product-category" expand="width" flexDirection="column">
      <Split expand="width">
        <Base tag="h6" className="breadcrumbs-text">
          <Breadcrumb breadcrumbItems={breadcrumbs} />
        </Base>
        {/*<Base tag="h6" className="sorting-filtering-text">Sorting and Filtering</Base>*/}
      </Split>
      <Base tag="h2" className="product-section-title">{title}</Base>
      <Row mt={2}>
        {categoryProducts.map((productId) => <ProductItem productId={productId} product={products[productId]} />)}
      </Row>
    </Flex>
  );
};

// Product Item

const ProductItem = ({ product, productId}) => {
  const history = useHistory()
  const { images, productTitle} = product;
  return (
    <Col className="product-item" flexDirection="column" xs={12} sm={6} md={4} lg={3} p={2}>
      <Base
        className="image-border-deco"
        onClick={() => {history.push(`/products/${productId}`)}}
      >
        <Image src={images[0].original} />
      </Base>
      <Base className="product-image-title">
        <Base>{productTitle}</Base>
      </Base>
    </Col>
  );
};


