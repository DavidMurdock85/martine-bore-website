import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Base, Col, Flex, Row, Split } from "./layout";
import Modal from "react-bootstrap/Modal";
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
  const [showProductInfo, setShowProductInfo] = useState(false)
  const [showModal, setShowModal] = useState(false);

  return (
    <Col className="product-item" flexDirection="column" xs={12} sm={6} md={4} lg={3} p={2}>



      <Modal show={showModal}>
        <Base><img  src={images[0]}></img></Base>
      </Modal>


      <Base className="image-border-deco" onClick={() => setShowModal(true)}><Carousel interval={null}>
        {images.map((image) => <Carousel.Item><img src={image}></img></Carousel.Item>)}
      </Carousel>

      </Base>

      {/*Text Section - {description},{dimensions},{price} - need to add an on hover function to display dropdown text otherwise should remain hidded */}

      <Base show={setShowProductInfo} className="product-catagory">
        <Base>{description}</Base>
        <Base>{dimensions}</Base>
        <Base>{price}</Base>
      </Base>


    </Col>
  );
};

