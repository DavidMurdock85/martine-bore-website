import "./ProductCategory.scss";
import "react-image-lightbox/style.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import { Base, Col, Flex, Row, Split } from "./layout";

/* Product Catgory */

export const ProductCategory = ({ title, products }) => {


  {/*console.log("PRODUCTS")
console.log(products)*/}


  return (

    <Flex className="product-category" expand="width" flexDirection="column">

      {/*<Split expand="width">
        <Base>breadcrumbs</Base>
        <Base>{title}</Base>
      </Split>
      <Base mt={2}>Sorting and Filtering</Base>*/}

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

      <Modal className="product-image-modal" show={showModal} onHide={() => setShowModal(false)}>
        <Carousel interval={null}>
          {images.map((image) => <Carousel.Item className="modal-image" ><img src={image}></img></Carousel.Item>)}
        </Carousel>
        <Modal.Title className="product-image-text-title">{product.description}</Modal.Title>
        <Modal.Title className="product-image-text-dimensions">{product.dimensions}</Modal.Title>
        <Modal.Title className="product-image-text-price">{product.price}</Modal.Title>
      </Modal>

      <Base
        className="image-border-deco"
        onClick={() => setShowModal(true)}
        
        
        //onMouseEnter={() => setShowProductInfo(true)}
        //onMouseLeave={() => setShowProductInfo(false)}
      

      >
        <Carousel interval={null}>
          {images.map((image) => <Carousel.Item><img src={image}></img></Carousel.Item>)}
        </Carousel>
      </Base>

      <Base className={`${showProductInfo ? "" : " hidden"}`}>
        <Base>{description}</Base>
        <Base>{dimensions}</Base>
        <Base>{price}</Base>
      </Base>
    </Col>
  );
};

