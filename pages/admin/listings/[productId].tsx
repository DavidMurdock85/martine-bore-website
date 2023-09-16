import { AdminWrapper } from '@mb/components/AdminWrapper'
import Image from 'next/image'

import {
  addImagesToListing,
  Listing,
  updateListing,
  deleteImage,
} from '@mb/services/AdminService'
import { get } from '@mb/services/FetchService'
import { Category } from '@mb/types/types'
import { IMAGES_BASE_URL } from '@mb/utils/constants'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useDropzone } from 'react-dropzone'
import { Typography } from '@mb/components/layout/Typography'

// Define the EditListing functional component
const EditListing: React.FC = () => {
  // Set up state variables using the useState hook
  const [categories, setCategories] = useState<Category[]>([])
  const [images, setImages] = useState<any[]>([])
  const [listing, setListing] = useState<Listing>({ categoryId: 1, id: 1 })

  // Use the useRouter hook to access the router object
  const nextJSRouter = useRouter()

  // Destructure the productId from the router's query object
  const { productId } = nextJSRouter.query

  // Define the onSubmit function, which is called when the form is submitted
  const onSubmit = async (values: Listing) => {
    try {
      // Call the updateListing function and store the result in updatedListing
      const updatedListing = await updateListing(values)
      // If images have been uploaded, call the addImagesToListing function
      if (images.length > 0) {
        await addImagesToListing(updatedListing.id, images)
      }
      // Redirect the user to the updated listing's page
      window.location.href = `/products/${updatedListing.route}`
    } catch (err) {
      console.log(err)
    }
  }

  // Set up the useDropzone hook to handle file uploads
  const { getRootProps, getInputProps, isDragActive } = useDropzone({

    //accept: 'image/*',
    
    onDrop: (acceptedFiles) => {
      // When files are dropped, create preview URLs and add the files to the images array
      const additionalImages = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
      setImages(images.concat(additionalImages))
    },
  })

  // Use the useEffect hook to fetch categories from the API on component mount
  useEffect(() => {
    ;(async () => {
      setCategories(await get<Category[]>('/categories'))
    })()
  }, [])

  // Use the useEffect hook to fetch the listing with the given productId when it changes
  useEffect(() => {
    ;(async () => {
      if (productId) {
        setListing(await get<Listing>(`/products/${productId}`))
      }
    })()
  }, [productId])

  return (
    <AdminWrapper>
      <div className="">
        <div className="flex flex-col items-center mt-4">
          <Formik
            initialValues={listing}
            enableReinitialize={true}
            onSubmit={onSubmit}
            validateOnChange={false}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
            }) => (
              <Form
                className="contact-us-form"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col items-start mb-4">
                  <Typography variant="h2">
                    Edit listing: {listing.title}
                  </Typography>
                  <Typography variant="body">
                    Use this form to edit a product listing
                  </Typography>
                </div>

                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    as="input"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Group controlId="metaTitle">
                  <Form.Label>Meta Title</Form.Label>
                  <Form.Control
                    as="input"
                    value={values.metaTitle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Group controlId="metaDescription">
                  <Form.Label>Meta Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={values.metaDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Group controlId="id">
                  <Form.Label>Product ID</Form.Label>
                  <Form.Control
                    as="input"
                    value={values.id}
                    disabled={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <Form.Group controlId="categoryId">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    as="select"
                    value={values.categoryId}
                    disabled={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {categories.map((category: Category) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.title}
                        </option>
                      )
                    })}
                  </Form.Control>
                </Form.Group>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <Form.Group controlId="period">
                      <Form.Label>Period</Form.Label>
                      <Form.Control
                        as="input"
                        value={values.period}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </div>
                  <div className="flex flex-col">
                    <Form.Group controlId="medium">
                      <Form.Label>Medium</Form.Label>
                      <Form.Control
                        as="input"
                        value={values.medium}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <Form.Group controlId="date">
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        as="input"
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </div>
                  <div className="flex flex-col">
                    <Form.Group controlId="dimensions">
                      <Form.Label>Dimensions</Form.Label>
                      <Form.Control
                        as="input"
                        value={values.dimensions}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <Form.Group controlId="origin">
                      <Form.Label>Origin</Form.Label>
                      <Form.Control
                        as="input"
                        value={values.origin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </div>
                  <div className="flex flex-col">
                    <Form.Group controlId="maker">
                      <Form.Label>Maker</Form.Label>
                      <Form.Control
                        as="input"
                        value={values.maker}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </div>
                </div>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <Form.Group controlId="price">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    as="input"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>

                {images && (
                  <div className="flex flex-col mt-1">
                    <Typography variant="h5">Existing Images</Typography>
                    <div className="mt-1">
                      {listing.images?.map((image, index) => {
                        return (
                          <div key={index}>
                            <Image
                              src={`${IMAGES_BASE_URL}/${image.thumbnail}`}
                              alt=""
                            />

                            {/*button to handle deletion of an individual image in a listing*/}
                            <Button
                              className="image-removal"
                              onClick={() => {
                                deleteImage(image.id)
                              }}
                            >
                              x
                            </Button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div className="flex mt-4" {...getRootProps()} >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <div className="flex">Drop the files here ...</div>
                  ) : (
                    <div className="flex">
                      Drag and drop images here, or click here to select.
                    </div>
                  )}
                </div>
                {images && (
                  <div className="flex mt-1">
                    {images.map((image, index) => (
                      <Image key={index} src={image.preview} alt="" />
                    ))}
                  </div>
                )}
                <div className="flex flex-row-reverse mt-2">
                  <Button type="submit" className="submit">
                    Update
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </AdminWrapper>
  )
}

export default EditListing
