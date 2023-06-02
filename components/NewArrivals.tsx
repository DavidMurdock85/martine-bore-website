import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ProductItem } from "@mb/pages/categories/[categoryId]";
import { Product } from "@mb/services/types";
import { get } from "@mb/services/FetchService";

export const NewArrivals: React.FC = () => {
  
  const [products, setProducts] = useState<Product[]>([]);

  const fetchCategory = async () => {
    try {
      const fetchedProducts: Product[] = await get(`/categories/1/products`);

      if (Array.isArray(fetchedProducts)) {

      // Fisher-Yates shuffle algorithm
      for (let i = fetchedProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [fetchedProducts[i], fetchedProducts[j]] = [
          fetchedProducts[j],
          fetchedProducts[i],
        ];
      }
      
    }

      setProducts(fetchedProducts.slice(0, 4));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  console.log('products:', products);

  return (
    <div className="container flex flex-col">
      <div className="flex flex-col">
        <h2 className="flex flex-row justify-center m-2">New Arrivals</h2>

        <div  className="flex flex-row">
          {products.length > 0 &&
            products.map((product, index: number) => (
              <ProductItem data-testid="new-arrivals-product-items" key={index} product={product}/>
            ))}
        </div>

        <div className="flex flex-row justify-center">
          <Link href="/categories/new-arrivals">
            <div className=" text-blue-500 hover:text-blue-700  hover:bg-slate-200">
              click for a full list of our new arrivals
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
