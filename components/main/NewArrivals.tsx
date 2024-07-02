import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ProductItem } from '@mb/pages/categories/[categoryId]'
import { Product } from '@mb/types/types'
import { get } from '@mb/services/FetchService'
import { Typography } from '@mb/components/layout/Typography'

export const NewArrivals: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  const fetchCategory = async () => {
    try {
      const fetchedProducts: Product[] = await get(`/categories/1/products`)
      for (let i = fetchedProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[fetchedProducts[i], fetchedProducts[j]] = [
          fetchedProducts[j],
          fetchedProducts[i],
        ]
      }

      setProducts(fetchedProducts.slice(0, 4))
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchCategory()
  }, [])
  return (
    <div className="bg-white p-2">
      <div>
        <Typography
          variant="h2"
          className="grid justify-center p-2 text-yellow-700 font-extralight"
        >
          New Arrivals
        </Typography>
        <div className="flex flex-wrap">
          {products.length > 0 &&
            products.map((product, index: number) => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4"
                key={index}
              >
                <ProductItem
                  data-testid="new-arrivals-product-items"
                  product={product}
                />
              </div>
            ))}
        </div>
        <div className="grid justify-center">
          <Typography
            className=" text-blue-500 hover:text-yellow-700 mt-2 mb-3"
            variant="h5"
          >
            <Link href="/categories/new-arrivals">
              click for a full list of our new arrivals
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  )
}
