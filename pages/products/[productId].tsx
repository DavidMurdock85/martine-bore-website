import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { PageWrapper } from '@mb/components/PageWrapper'
import { Product } from '@mb/types/types'
import { API_BASE_URL, IMAGES_BASE_URL } from '@mb/utils/constants'
import { Typography } from '@mb/components/layout/Typography'

const ProductPage: NextPage = () => {
  const nextJSRouter = useRouter()
  const { productId } = nextJSRouter.query as { productId?: string }
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
  useEffect(() => {
    if (productId) {
      fetchProduct()
    }
  }, [productId])

  return (
    <PageWrapper
      title={product.metaTitle}
      description={product.metaDescription}
    >
      <div className="flex sm:flex-wrap md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center pt-5 pb-5 bg-white">
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
        <div className="flex flex-col p-5 ml-5 mr-5 ">
          <div className="flex flex-col ">
            <Typography
              variant="h2"
              className="flex flex-row m-1  text-yellow-700"
            >
              Title
            </Typography>
            <Typography variant="h3" className="flex flex-row m-1">
              {product.title}
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography
              variant="h2"
              className="flex flex-row m-1 text-yellow-700"
            >
              Description
            </Typography>
            <Typography variant="body" className="flex flex-row m-1">
              {product.description}
            </Typography>
          </div>
          <Typography
            variant="h2"
            className="flex flex-row m-1  text-yellow-700"
          >
            Details
          </Typography>
          <div className="flex flex-row">
            <ul className="flex flex-col ">
              <li className="">
                {product.period && (
                  <Typography variant="body">
                    Period: {product.period}
                  </Typography>
                )}
              </li>
              <li className="">
                {product.date && (
                  <Typography variant="body">Date: {product.date}</Typography>
                )}
              </li>
              <li className="">
                {product.origin && (
                  <Typography variant="body">
                    Origin: {product.origin}
                  </Typography>
                )}
              </li>
              <li className="">
                {product.maker && (
                  <Typography variant="body">Maker: {product.maker}</Typography>
                )}
              </li>
              <li className="">
                <Typography variant="body">Product #: {product.id}</Typography>
              </li>
              <li className="">
                {product.medium && (
                  <Typography variant="body">
                    Medium: {product.medium}
                  </Typography>
                )}
              </li>
              <li className="">
                {product.dimensions && (
                  <Typography variant="body">
                    Dimensions: {product.dimensions}
                  </Typography>
                )}
              </li>
              <li className="">
                {product.condition && (
                  <Typography variant="body">
                    Condition: {product.condition}
                  </Typography>
                )}
              </li>
              <li className="">
                {product.price && (
                  <Typography variant="body">Price: {product.price}</Typography>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default ProductPage
