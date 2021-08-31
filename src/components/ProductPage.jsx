import "./ProductPage.scss";
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
                <Base tag="h6" className="">
                    <Breadcrumb breadcrumbItems={ breadcrumbs } />
                </Base>
                <Base tag="h6">Sorting and Filtering</Base>
            </Split>
            <Row className="product">
                <Col className="product-item-image">
                    <Carousel  interval={null}>
                        {product.images.map((image) => <Carousel.Item ><Image src={image} /></Carousel.Item>)}
                    </Carousel>
                </Col>
                <Col sm={6} className="product-item-text">
                    <Base>
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

