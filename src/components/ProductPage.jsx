import "./ProductPage.scss";
import "react-image-lightbox/style.css";

import React from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";

import { categories } from "../api/categories";
import { products } from "../api/products";
import { Base, Col, Row, Split } from "../components/layout";
import { Breadcrumb } from "./Breadcrumbs";

export const ProductPage = () => {

    const { productId } = useParams();

    const product = products[productId];

    let localBreadcrumbs = [].concat(
        categories[product.category].breadcrumbs,
        { url: `/products/${productId}`, name: product.productTitle }
    );

    return (
        <Base>
            <Base expand="width" mt={2}>
                <Base tag="h6" className="">
                    <Breadcrumb breadcrumbItems={localBreadcrumbs} />
                </Base>
               
            </Base>
            <Row className="product" noGutters>
                <Col className="product-item-image" xs={12} sm={6}>
                    <ImageGallery
                        items={product.images}
                        showNav={false}
                        showPlayButton={false}
                        showFullscreenButton={false}
                    />
                    {/*
                        <Carousel  interval={null}>
                            {product.images.map((image) => <Carousel.Item ><Image src={image} /></Carousel.Item>)}
                        </Carousel>
                    */}
                </Col>
                <Col className="product-item-text" xs={12} sm={6}>
                    <Base p={4}>
                        <Base tag="h5" className="product-page-headings">Title</Base>
                        <Base tag="h6" className="product-page-title">{product.productTitle}</Base>
                        <Base tag="h5" className="product-page-headings">Description</Base>
                        <Base tag="h6" className="product-page-description">{product.description}</Base>
                        <Base tag="h5" className="product-page-headings">Dimensions</Base>
                        <Base tag="h6" className="product-page-dimensions">{product.dimensions}</Base>
                        <Base tag="h5" className="product-page-headings">Price</Base>
                        <Base tag="h6" className="product-page-price">{product.price}</Base>
                    </Base>
                </Col>
            </Row>
        </Base>
    );
};

