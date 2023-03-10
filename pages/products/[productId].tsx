import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Base, Col, Row } from "@mb/components/layout";
import { PageWrapper } from "@mb/components/PageWrapper";
import { Breadcrumb } from "@mb/components/Breadcrumbs";
import { CategoryBreadcrumb, Product } from "@mb/services/types";
import { API_BASE_URL, IMAGES_BASE_URL } from "@mb/utils/constants";

// declaring a special function product page of type NextPage
const ProductPage: NextPage = () => {
  //get nextJSRouter which will be used to fetch info from the url path that has been queried
  const nextJSRouter = useRouter();

  // tying productId to the value from the url path thats been queried
  const { productId } = nextJSRouter.query;

  //declaring local state for product tied to react.
  const [product, setProduct] = useState<Partial<Product>>({});

  // fetch product from express backend api and await response
  const fetchProduct = async () => {
    const url = `${API_BASE_URL}/products/${productId}`;

    // try catch wraps code and will catch err if err occurs
    try {
      const response = await fetch(url);

      // response is ok - get data as JSON and set product state to be = that that object
      if (response.ok) {
        const json = await response.json();

        setProduct(json);
      }

      // console log json script of database
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

  // breadcrumbs

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
        {/*product breadcrumbs*/}

        <Base expand="width" mt={2}>
          <Base tag="h6" className="">
            <Breadcrumb breadcrumbItems={localBreadcrumbs} />
          </Base>
        </Base>

        {/*product section*/}

        <Row className="product" noGutters>
          {/*product images*/}

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

          {/*product text block*/}

          <Col className="product-item-text" xs={12} sm={6}>
            <Base className="product-item-text-sections" px={4}>
              {/*product - title*/}

              <Base mt={3} className="product-page-title">
                <Base tag="h1" mb={4}>
                  {product.title}
                </Base>
              </Base>

              {/* product - description */}

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

              {/* product - details */}

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
