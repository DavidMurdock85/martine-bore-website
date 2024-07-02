import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { PageWrapper } from '@mb/components/PageWrapper'
import { useAuth } from '@mb/providers/AuthProvider'
import { deleteListing } from '@mb/services/AdminService'
import { get } from '@mb/services/FetchService'
import { Category, Product } from '@mb/types/types'
import { IMAGES_BASE_URL } from '@mb/utils/constants'
import { Typography } from '@mb/components/layout/Typography'

interface ProductItemProps {
  onDelete?: () => void
  product: Product
}

export const ProductItem: React.FC<ProductItemProps> = ({
  onDelete,
  product,
}) => {
  const router = useRouter()
  const loggedIn = useAuth().state?.loggedIn
  const { id, images, route, title } = product

  return (
    <div
      onClick={() => {
        router.push(`/products/${route}`)
      }}
    >
      {loggedIn && (
        <div>
          <a href={`/admin/listings/${route}`} className="mr-1 pb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </a>
          <div
            className="pb-1"
            onClick={async (e: React.MouseEvent) => {
              e.stopPropagation()
              const confirmDelete = confirm(
                'Are you sure you want to delete this listing?'
              )
              if (confirmDelete) {
                await deleteListing(id)
                onDelete && onDelete()
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}
      <div className="m-2">
        {images.length > 0 && (
          <img
            src={`${IMAGES_BASE_URL}/${images[0].original}`}
            alt={title || ''}
            width={750}
            height={750}
            className=""
          />
        )}
      </div>
    </div>
  )
}
const ProductCategory: NextPage = () => {
  const nextJSRouter = useRouter()
  const { categoryId } = nextJSRouter.query
  const [category, setCategory] = useState<Partial<Category>>({})
  const [products, setProducts] = useState<Product[]>([])
  const fetchCategory = async () => {
    try {
      const fetchedCategory: Category = await get(`/categories/${categoryId}`)
      setCategory(fetchedCategory)
      const fetchedProducts: Product[] = await get(
        `/categories/${fetchedCategory.id}/products`
      )
      setProducts(fetchedProducts)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchCategory()
  }, [categoryId])
  const { title, metaTitle, metaDescription } = category
  
  return (
    <PageWrapper title={metaTitle} description={metaDescription}>
      <Typography
        variant="h2"
        className="bg-white flex justify-center text-yellow-700"
      >
        {title}
      </Typography>
      <div className="bg-white">
        <div className="flex flex-wrap">
          {products.length > 0 &&
            products.map((product, index: number) => (
              <div
                key={index}
                className="sm:w-1/2 sm-m:w-1/2 sm-l:w-1/3 md:w-1/4 lg:w-1/5 xl:W-1/6 2xl:1/4"
              >
                <ProductItem
                  product={product}
                  onDelete={() => {
                    setProducts(
                      products.filter((item) => item.id !== product.id)
                    )
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    </PageWrapper>
  )
}

export default ProductCategory
