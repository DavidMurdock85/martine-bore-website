import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { PageWrapper } from '@mb/components/PageWrapper'
//import { Breadcrumb } from '@mb/components/Breadcrumbs'
//import { CategoryBreadcrumb, Product } from "@mb/services/types";
import { Product } from '@mb/services/types'
import { API_BASE_URL, IMAGES_BASE_URL } from '@mb/utils/constants'

const ProductPage: NextPage = () => {
  // Use the useRouter hook from next/router to get the productId from the query string
  const nextJSRouter = useRouter()

  const { productId } = nextJSRouter.query as { productId?: string }

  // Initialize a state for the product and set it as an empty object
  const [product, setProduct] = useState<Partial<Product>>({})

  const fetchProduct = async () => {
    const url = `${API_BASE_URL}/products/${productId}`

    try {
      const response = await fetch(url)

      if (response.ok) {
        const json = await response.json()
        setProduct(json)
      }
    } catch (err) {
      console.log(err)
    }
  }

  // Use the useEffect hook to fetch the product data when the productId changes
  useEffect(() => {
    if (productId) {
      fetchProduct()
    }
  }, [productId])

  //let localBreadcrumbs: CategoryBreadcrumb[] = [];

  // If the product has a category, add a breadcrumb for the product to the beginning of its category breadcrumbs
  /*
  if (product.category) {
    localBreadcrumbs = [
      { url: `/products/${productId}`, name: product.title },
    ].concat(product.category.breadcrumbs);
  }
  */

  return (
    <PageWrapper
      title={product.metaTitle}
      description={product.metaDescription}
    >
      <>
        <div className="mt-2">
          <h6>{/* <Breadcrumb breadcrumbItems={localBreadcrumbs} />*/}</h6>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col">
            <ImageGallery
              items={
                product.images?.map((image) => {
                  return {
                    ...image,
                    original: `${IMAGES_BASE_URL}/${image.original}`,
                    thumbnail: `${IMAGES_BASE_URL}/${image.thumbnail}`,
                  }
                }) || []
              }
              showNav={false}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>

          <div className="flex flex-col">
            <div className="px-4">
              <div className="mt-3">
                <h1 className="mb-4">{product.title}</h1>
              </div>

              <div>
                <div>
                  <h2 className="mb-1">Description</h2>
                </div>

                <div>
                  <p>{product.description}</p>
                </div>
              </div>

              <h2 className="mt-4">Details</h2>

              <div className="flex flex-row">
                <div className="flex flex-col">
                  {product.period && (
                    <p className="mt-1 mb-1">Period: {product.period}</p>
                  )}
                  {product.date && (
                    <p className="mt-1 mb-1">Date: {product.date}</p>
                  )}
                  {product.origin && (
                    <p className="mt-1 mb-1">Origin: {product.origin}</p>
                  )}
                  {product.maker && (
                    <p className="mt-1 mb-1">Maker: {product.maker}</p>
                  )}
                  <p className="mt-1 mb-1">Product #: {product.id}</p>
                </div>
                <div className="flex flex-col">
                  {product.medium && (
                    <p className="mt-1 mb-1">Medium: {product.medium}</p>
                  )}
                  {product.dimensions && (
                    <p className="mt-1 mb-1">
                      Dimensions: {product.dimensions}
                    </p>
                  )}
                  {product.condition && (
                    <p className="mt-1 mb-1">Condition: {product.condition}</p>
                  )}
                  {product.price && (
                    <p className="mt-1 mb-1">Price: {product.price}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </PageWrapper>
  )
}

export default ProductPage
