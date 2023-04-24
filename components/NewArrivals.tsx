import React, { useState, useEffect } from "react";
import { Flex, Row, Col } from "@mb/components/layout";
import { Link } from "@mb/components/elements";
import { ProductItem } from "@mb/pages/categories/[categoryId]";
import { Product } from "@mb/services/types";
import { get } from "@mb/services/FetchService";

export const NewArrivals: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchCategory = async () => {
    try {
      const fetchedProducts: Product[] = await get(`/categories/1/products`);

      // Fisher-Yates shuffle algorithm
      for (let i = fetchedProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [fetchedProducts[i], fetchedProducts[j]] = [
          fetchedProducts[j],
          fetchedProducts[i],
        ];
      }

      setProducts(fetchedProducts.slice(0, 4));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Flex flexDirection="column" className="new-arrivals-parent">
      <Col>
        <Row
          justifyContent="center"
          className="new-arrivals-title"
          tag="h2"
          m={2}
        >
          New Arrivals
        </Row>

        <Row className="new-arrivals-products" xs={12} md={6} lg={6}>
          {products.length > 0 &&
            products.map((product, index: number) => (
              <ProductItem key={index} product={product} />
            ))}
        </Row>

        <Row justifyContent="center">
          <Link href="/categories/new-arrivals">
            <Flex>- click for a full list of our new arrivals -</Flex>
          </Link>
        </Row>
      </Col>
    </Flex>
  );
};
