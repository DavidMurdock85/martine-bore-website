import { AdminWrapper } from '@mb/components/AdminWrapper'
import Image from 'next/image'
import Link from 'next/link'
import {
  addImagesToListing,
  createNewListing,
  NewListing,
} from '@mb/services/AdminService'
import { get } from '@mb/services/FetchService'
import { Category, Product } from '@mb/types/types'
import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useDropzone } from 'react-dropzone'
import { Typography } from '@mb/components/layout/Typography'

// create listing
const CreateListing: React.FC = () => {
  // set product
  const [submitted, setSubmitted] = useState<Product[]>([])

  // set categories
  const [categories, setCategories] = useState<Category[]>([])

  // set images
  const [images, setImages] = useState<any[]>([])

  // fetch categories
  const fetchCategories = async () => {
    setCategories(await get<Category[]>('/categories'))
  }

  // on submit create new listing
  const onSubmit = async (values: NewListing) => {
    try {
      // await created new listing
      const createdListing = await createNewListing(values)

      // await added images
      const addedImages = await addImagesToListing(createdListing.id, images)

      //
      setSubmitted(
        submitted.concat({
          ...createdListing,
          images: addedImages,
        })
      )
    } catch (err) {
      console.log(err)
    }
  }

  // get
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const additionalImages = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
      setImages(images.concat(additionalImages))
    },
  })

  //
  useEffect(() => {
    fetchCategories()
  }, [])

  //

  return (
    <AdminWrapper>
      <div className="">
        {submitted && (
          <div className="flex">
            {submitted.map((submitted) => {
              return (
                <Link key={submitted.id} href={`/products/${submitted.route}`}>
                  {submitted.title}
                </Link>
              )
            })}
          </div>
        )}
        <div className="flex flex-col items-center mt-4">
          <Formik
            initialValues={{
              //categoryId: 1,
              title: '',
              period: '',
              date: '',
              origin: '',
              maker: '',
              medium: '',
              description: '',
              dimensions: '',
              price: '',
            }}
            onSubmit={onSubmit}
            validateOnChange={false}
          >
            {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <Form
                className="contact-us-form"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col items-start mb-4">
                  <Typography variant="h2">Add a new listing</Typography>
                  <Typography variant="body">
                    Use this form to add a new product listing
                  </Typography>
                </div>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    as="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Group controlId="metaTitle">
                  <Form.Label>Meta Title</Form.Label>
                  <Form.Control
                    as="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Group controlId="metaDescription">
                  <Form.Label>Meta Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Group controlId="categoryId">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    as="select"
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </div>
                  <div className="flex flex-row">
                    <Form.Group controlId="maker">
                      <Form.Label>Maker</Form.Label>
                      <Form.Control
                        as="input"
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <Form.Group controlId="price">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    as="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <div className="flex items-center mt-4" {...getRootProps()}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <Typography variant="body" className="">
                      Drop the files here ...
                    </Typography>
                  ) : (
                    <Typography variant="body" className="drop-here">
                      Drag and drop images here, or click here to select.
                    </Typography>
                  )}
                </div>
                {images && (
                  <div className="mt-1">
                    {images.map((image, index) => (
                      <Image key={index} src={image.preview} alt="test" />
                    ))}
                  </div>
                )}
                <div className="flex flex-row-reverse mt-2">
                  <Button type="submit" className="submit">
                    Create
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

export default CreateListing
