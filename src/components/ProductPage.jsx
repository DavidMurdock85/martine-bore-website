import "./ProductCategory.scss";
import "react-image-lightbox/style.css";

import React from "react";
import { useParams } from "react-router-dom";

import { categories } from "../api/categories";
import { products } from "../api/products";
import { Image } from "./elements";
import { Base } from "./layout";

export const ProductPage = () => {

    const { productId } = useParams();

    const product = products[productId]

    return (
        <Base>
            <Split expand="width">
                <Base tag="h6">
                    <Breadcrumb breadcrumbItems={categories[product.category]} />
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

