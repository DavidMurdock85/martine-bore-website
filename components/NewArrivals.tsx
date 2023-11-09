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

      console.log(fetchedProducts)

      // Fisher-Yates shuffle algorithm
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

  console.log('products:', products)

  return (
    <div className="grid grid-col-4  mt-2">
      <div className="border-slate-300 border m-1">
        <Typography
          variant="h2"
          className="grid justify-center mt-2 mb-2 text-yellow-700 font-extralight"
        >
          New Arrivals
        </Typography>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
          {products.length > 0 &&
            products.map((product, index: number) => (
              <ProductItem
                data-testid="new-arrivals-product-items"
                key={index}
                product={product}
              />
            ))}
        </div>

        <div className="grid justify-center">
          <Typography
            className=" text-blue-500 hover:text-blue-700  hover:bg-slate-400 mt-2 mb-3"
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
