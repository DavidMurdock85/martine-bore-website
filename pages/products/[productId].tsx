//import { categories } from "@mb/api/categories";
import { Breadcrumb } from "@mb/components/Breadcrumbs";
import { Base, Col, Row } from "@mb/components/layout";
import { PageWrapper } from "@mb/components/PageWrapper";
import { CategoryBreadcrumb, Product } from "@mb/services/types";
import { API_BASE_URL } from "@mb/utils/constants";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

// declaring a special function product page of type NextPage
const ProductPage: NextPage = () => {
  //get nextJSRouter which will be used to fetch info from the url path that has been queried
  const nextJSRouter = useRouter();

  // tying productId to the value from the url path thats been queried
  const { productId } = nextJSRouter.query;

  //console.log(productId);

  //declaring local state for product tied to react.
  const [product, setProduct] = useState<Partial<Product>>({});

  // fetch product from express backend api and await response
  const fetchProduct = async () => {
    const url = `${API_BASE_URL}/products/${productId}`;

    //console.log(url);

    // try catch wraps code and will catch err if err occurs
    try {
      const response = await fetch(url);

      //console.log(response);

      // response is ok - get data as JSON and set product state to be = that that object
      if (response.ok) {
        const json = await response.json();

        // console log json script of database

        console.log(json);

        setProduct(json);
      }
    } catch (err) {
      //console log err if it occurs
      console.log(err);
    }
  };

  // useEffect takes two parameters, a callback function, an a dependency array. useEffect runs callback function inside useEffect to call fetchProduct when productId changes.
  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  let localBreadcrumbs: CategoryBreadcrumb[] = [];

  /* if(product.category) {
    localBreadcrumbs = [
      { url: `/products/${productId}`, name: product.productTitle },
    ].concat(product.category.breadcrumbs);
  } */

  return (
    <PageWrapper title={product.title} description={product.description}>
      <Base>
        <Base expand="width" mt={2}>
          <Base tag="h6" className="">
            <Breadcrumb breadcrumbItems={localBreadcrumbs} />
          </Base>
        </Base>

        {/*product image*/}

        <Row className="product" noGutters>
          <Col className="product-item-image" xs={12} sm={6}>
            <ImageGallery
              items={product.images || []}
              showNav={false}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </Col>

          {/*product title, product description, product details */}

          <Col className="product-item-text" xs={12} sm={6}>
            <Base className="product-item-text-sections" px={4}>
              <Base mt={3} className="product-page-title">
                <Base tag="h2" mb={4}>
                  {product.title}
                </Base>
              </Base>
              <Base className="item-description">
                <Base className="description-title">
                  <Base tag="h3" mb={1}>
                    Description
                  </Base>
                </Base>
                <Base>
                  <Base tag="p" className="product-page-description">
                    {product.description}
                  </Base>
                </Base>
              </Base>
              <Base tag="h3" mt={4} className="details-title">
                Details
              </Base>
              <Row>
                <Col>
                  <Base tag="p" mt={1} mb={1} className="product-page-text">
                    Period: {product.period}
                  </Base>
                  <Base tag="p" mt={1} mb={1} className="product-page-text">
                    Date: {product.date}
                  </Base>
                  <Base tag="p" mt={1} mb={1} className="product-page-text">
                    Origin: {product.origin}
                  </Base>
                  <Base tag="p" mt={1} mb={1} className="product-page-text">
                    Maker: {product.maker}
                  </Base>
                  <Base tag="p" mt={1} mb={1} className="product-page-text">
                    Catalogue #: {product.productId}
                  </Base>
                </Col>
                <Col>
                  <Base tag="p" mt={1} mb={1} className="product-page-text">
                    Medium: {product.medium}
                  </Base>
                  <Base tag="p" mt={1} mb={1} className="product-page-text">
                    Dimensions: {product.dimensions}
                  </Base>
                  <Base tag="p" mt={1} mb={1} className="product-page-text">
                    Condition: {product.condition}
                  </Base>
                  <Base tag="p" mt={1} mb={1} className="product-page-text">
                    Price: {product.price}
                  </Base>
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
