//@ts-nocheck
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Base, Col, Row } from "@mb/components/layout";
import { PageWrapper } from "@mb/components/PageWrapper";
import { Breadcrumb } from "@mb/components/Breadcrumbs";
import { CategoryBreadcrumb, Product } from "@mb/services/types";
import { API_BASE_URL, IMAGES_BASE_URL } from "@mb/utils/constants";

const ProductPage: NextPage = () => {
  // Use the useRouter hook from next/router to get the productId from the query string
  const nextJSRouter = useRouter();
  const { productId } = nextJSRouter.query;

  // Initialize a state for the product and set it as an empty object
  const [product, setProduct] = useState<Partial<Product>>({});
  
  const fetchProduct = async () => {
    const url = `${API_BASE_URL}/products/${productId}`;

    try {
      const response = await fetch(url);

      if (response.ok) {
        const json = await response.json();
        setProduct(json);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Use the useEffect hook to fetch the product data when the productId changes
  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  let localBreadcrumbs: CategoryBreadcrumb[] = [];

  // If the product has a category, add a breadcrumb for the product to the beginning of its category breadcrumbs
  if (product.category) {
    let localBreadcrumbs = [
      { url: `/products/${productId}`, name: product.title },
    ].concat(product.category.breadcrumbs);
  }

  return (
    <PageWrapper
      title={product.metaTitle}
      description={product.metaDescription}
    >
      <Base>
        <Base expand="width" mt={2}>
          <Base tag="h6" className="">
            <Breadcrumb breadcrumbItems={localBreadcrumbs} />
          </Base>
        </Base>

        <Row className="product" noGutters>
          
          <Col className="product-item-image" xs={12} sm={6}>
            <ImageGallery
              items={
                product.images?.map((image) => {
                  return {
                    ...image,
                    original: `${IMAGES_BASE_URL}/${image.original}`,
                    thumbnail: `${IMAGES_BASE_URL}/${image.thumbnail}`,
                  };
                }) || []
              }
              showNav={false}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </Col>

          <Col className="product-item-text" xs={12} sm={6}>
            <Base className="product-item-text-sections" px={4}>
              <Base mt={3} className="product-page-title">
                <Base tag="h1" mb={4}>
                  {product.title}
                </Base>
              </Base>

              <Base className="item-description">
                <Base className="description-title">
                  <Base tag="h2" mb={1}>
                    Description
                  </Base>
                </Base>

                <Base>
                  <Base tag="p" className="product-page-description">
                    {product.description}
                  </Base>
                </Base>
              </Base>

              <Base tag="h2" mt={4} className="details-title">
                Details
              </Base>

              <Row>
                <Col>
                  {product.period && (
                    <Base tag="p" mt={1} mb={1} className="product-page-text">
                      Period: {product.period}
                    </Base>
                  )}
                  {product.date && (
                    <Base tag="p" mt={1} mb={1} className="product-page-text">
                      Date: {product.date}
                    </Base>
                  )}
                  {product.origin && (
                    <Base tag="p" mt={1} mb={1} className="product-page-text">
                      Origin: {product.origin}
                    </Base>
                  )}
                  {product.maker && (
                    <Base tag="p" mt={1} mb={1} className="product-page-text">
                      Maker: {product.maker}
                    </Base>
                  )}
                  <Base tag="p" mt={1} mb={1} className="product-page-text">
                    Product #: {product.id}
                  </Base>
                </Col>
                <Col>
                  {product.medium && (
                    <Base tag="p" mt={1} mb={1} className="product-page-text">
                      Medium: {product.medium}
                    </Base>
                  )}
                  {product.dimensions && (
                    <Base tag="p" mt={1} mb={1} className="product-page-text">
                      Dimensions: {product.dimensions}
                    </Base>
                  )}
                  {product.condition && (
                    <Base tag="p" mt={1} mb={1} className="product-page-text">
                      Condition: {product.condition}
                    </Base>
                  )}
                  {product.price && (
                    <Base tag="p" mt={1} mb={1} className="product-page-text">
                      Price: {product.price}
                    </Base>
                  )}
                </Col>
              </Row>
            </Base>
          </Col>
        </Row>
      </Base>
    </PageWrapper>
  );
};

export default ProductPage;
