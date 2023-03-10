import React, { useState } from "react";
import { Col, Flex, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";
import { ProductItem } from "@mb/pages/categories/[categoryId]";
import { Product } from "@mb/services/types";
import { get } from "@mb/services/FetchService";

export const NewArrivals: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchCategory = async () => {
    // try catch wraps code and will catch err if err occurs
    try {
      const fetchedProducts: Product[] = await get(`/categories/1/products`);

      //future - change slice to pick for random indexes...random  numbers and arrays...generate 4 random numbers.
      setProducts(fetchedProducts.slice(0, 3));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex flexDirection="column" className="new-arrivals-parent" m={2}>
      
      <Row
        flexDirection="row"
        justifyContent="center"
        className="new-arrivals-title"
        tag="h2"
        m={2}
      >
        New Arrivals
      </Row>

      <Row flexDirection="row">
        <Col flexDirection="column" xs={12} md={6} lg={6}>
          <Row mt={2}>
            {products.length > 0 &&
              products.map((product, index: number) => (
                <ProductItem key={index} product={product} />
              ))}
          </Row>
        </Col>
      </Row>

      {/*
      <Row flexDirection="row" justifyContent="center">
        <Link href="/categories/new-arrivals">
          <Flex>- click for a full list of our new arrivals -</Flex>
        </Link>
      </Row>

      */}

    </Flex>
  );
};
