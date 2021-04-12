import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Base, Col, Flex, Row, Split } from "./layout";
import Modal from "react-bootstrap/Modal";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "./ProductCategory.scss"

/* Product Catgory */

export const ProductCategory = ({ title, products }) => {


  {/*console.log("PRODUCTS")
console.log(products)*/}

  return (
    <Flex className="product-category" expand="width" flexDirection="column">
      <Split expand="width">
        <Base>breadcrumbs</Base>
        <Base>{title}</Base>
      </Split>
      <Base mt={2}>Sorting and Filtering</Base>
      <Row mt={2}>
        {products.map((product) => <ProductItem product={product} />)}
      </Row>
    </Flex>
  );
};

/* Product Item */

const ProductItem = ({ product }) => {
  const { images, description, dimensions, price } = product;

  const [showLightBox, setShowLightBox] = useState(false);
  const photoIndex = 0

  return (
    <Col className="product-item" flexDirection="column" xs={12} sm={6} md={4} lg={3} p={2}>

      <Modal show={showLightBox}>
        <Lightbox className="light-box"
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setShowLightBox(false)}
        />
      </Modal>

      <Base onClick={() => setShowLightBox(true)}><Carousel interval={null}>
        {images.map((image) => <Carousel.Item><img src={image}></img></Carousel.Item>)}
      </Carousel>
      </Base>
      <Base className="product-item-description">{description}</Base>
      <Base className="product-item-dimensions">{dimensions}</Base>
      <Base className="product-item-price">{price}</Base>
    </Col>
  );
};

