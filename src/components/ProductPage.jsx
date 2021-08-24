import "./ProductCategory.scss";
import "react-image-lightbox/style.css";

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";

import { categories } from "../api/categories";
import { products } from "../api/products";
import { Base, Col, Row, Split } from "../components/layout";
import { Breadcrumb } from "./Breadcrumbs";
import { Image } from "./elements";

export const ProductPage = () => {

    const { productId } = useParams();

    const product = products[productId];

    const breadcrumbs = categories[product.category].breadcrumbs;
    breadcrumbs.push({ url:`/products/${productId}`, name: product.productTitle });

    return (
        <Base>
            <Split expand="width" mt={2}>
                <Base tag="h6">
                    <Breadcrumb breadcrumbItems={ breadcrumbs } />
                </Base>
                <Base/>
            </Split>
            <Row>
                <Col>
                    <Carousel interval={null}>
                        {product.images.map((image) => <Carousel.Item><Image src={image} /></Carousel.Item>)}
                    </Carousel>
                </Col>
                <Col>
                    <Base className="product-text" p={2}>
                        <Base className="product-image-text-title">{product.description}</Base>
                        <Base className="product-image-text-dimensions">{product.dimensions}</Base>
                        <Base className="product-image-text-price">{product.price}</Base>
                    </Base>
                </Col>
            </Row>
        </Base>
    );
};

