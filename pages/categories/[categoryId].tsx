import { Breadcrumb } from "@mb/components/Breadcrumbs";
import { Image } from "@mb/components/elements";
import { Base, Col, Flex, Row, Split } from "@mb/components/layout";
import { PageWrapper } from "@mb/components/PageWrapper";
import { get } from "@mb/services/FetchService";
import { Category, Product } from "@mb/services/types";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// Product Item
interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const router = useRouter();

  const { images, title } = product;

  // this is returning product image and title from categories
  return (
    <Col
      className="product-item"
      flexDirection="column"
      xs={12}
      sm={6}
      md={4}
      lg={3}
      p={2}
      onClick={() => {
        router.push(`/products/${product.route}`);
      }}
    >
      <Base className="image-border-deco">
        {images && (
          <Image className="product-image" src={images[0].original} alt="" />
        )}
      </Base>

      <Base className="product-image-title">
        <Base>{title}</Base>
      </Base>
    </Col>
  );
};

// declaring a special function product page of type NextPage
const ProductCategory: NextPage = () => {
  //get nextJSRouter which will be used to fetch info from the url path that has been queried
  const nextJSRouter = useRouter();

  // tying categoryId to the value from the url path thats been queried
  const { categoryId } = nextJSRouter.query;

  //console.log(categoryId);

  //declaring local state for category tied to react.
  const [category, setCategory] = useState<Partial<Category>>({});
  const [products, setProducts] = useState<Product[]>([]);

  // fetch category from express backend api and await response
  const fetchCategory = async () => {
    // try catch wraps code and will catch err if err occurs
    try {
      const fetchedCategory: Category = await get(`/categories/${categoryId}`)

      setCategory(fetchedCategory);

      const fetchedProducts: Product[] = await get(`/categories/${fetchedCategory.id}/products`);

      setProducts(fetchedProducts);
    } catch (err) {
      //console log err if it occurs
      console.log(err);
    }
  };

  // useEffect takes two parameters, a callback function, an a dependency array. useEffect runs callback function inside useEffect to call fetchProduct when productId changes.
  useEffect(() => {
    fetchCategory();
  }, [categoryId]);

  const { breadcrumbs, title } = category;

  return (
    <PageWrapper title={title} description={title}>
      <Flex className="product-category" expand="width" flexDirection="column">
        <Split expand="width">
          <Base tag="h6" className="breadcrumbs-text">
            <Breadcrumb breadcrumbItems={breadcrumbs || []} />
          </Base>
          {/*<Base tag="h6" className="sorting-filtering-text">Sorting and Filtering</Base>*/}
        </Split>
        <Base tag="h2" className="product-category-title">
          {title}
        </Base>
        <Row mt={2}>
          {products.length > 0 &&
            products.map((product, index: number) => (
              <ProductItem key={index} product={product} />
            ))}
        </Row>
      </Flex>
    </PageWrapper>
  );
};

export default ProductCategory;
