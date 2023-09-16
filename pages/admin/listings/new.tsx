import { AdminWrapper } from '@mb/components/AdminWrapper'
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
    // accept: {'': ['image/*']},
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

  return (
    <AdminWrapper>
      <div className="bg-slate-100 border-solid border border-slate-500 m-10">
        {submitted && (
          <div>
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
              // categoryId: 1,
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
            {({ handleChange, handleBlur, handleSubmit }) => (
              <Form
                className="contact-us-form"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="flex justify-center mb-2">
                  <Typography variant="h2">Add a new listing</Typography>
                </div>

                <div className="flex justify-center mb-2">
                  <Typography variant="body">
                    Use this form to add a new product listing
                  </Typography>
                </div>

                <div className="flex flex-col">
                  <Form.Group className="flex mb-2" controlId="title">
                    <Form.Label className="mr-24">
                      <Typography variant="h4">Title</Typography>
                    </Form.Label>
                    <Form.Control
                      as="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-slate-300 border border-slate-500"
                    />
                  </Form.Group>

                  <Form.Group className="flex mb-2" controlId="metaTitle">
                    <Form.Label className="mr-14">
                      <Typography variant="h4">Meta Title</Typography>
                    </Form.Label>
                    <Form.Control
                      as="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-slate-300 border border-slate-500"
                    />
                  </Form.Group>

                  <Form.Group className="flex mb-2" controlId="metaDescription">
                    <Form.Label className="mr-3">
                      <Typography variant="h4">Meta Description</Typography>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-slate-300 border border-slate-500"
                    />
                  </Form.Group>
                  <Form.Group
                    className="flex justify-start mb-2"
                    controlId="categoryId"
                  >
                    <Form.Label className="mr-2">
                      <Typography variant="h4">Category</Typography>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-slate-300 border border-slate-500"
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
                  <Form.Group
                    className="flex justify-start mb-2"
                    controlId="period"
                  >
                    <Form.Label className="mr-2">
                      <Typography variant="h4">Period</Typography>
                    </Form.Label>
                    <Form.Control
                      as="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-slate-300 border border-slate-500"
                    />
                  </Form.Group>

                  <Form.Group
                    className="flex justify-center mb-2"
                    controlId="medium"
                  >
                    <Form.Label className="mr-2">
                      <Typography variant="h4">Medium</Typography>
                    </Form.Label>
                    <Form.Control
                      as="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-slate-300 border border-slate-500"
                    />
                  </Form.Group>

                  <Form.Group
                    className="flex justify-center mb-2"
                    controlId="date"
                  >
                    <Form.Label className="mr-2">
                      <Typography variant="h4">Date</Typography>
                    </Form.Label>
                    <Form.Control
                      as="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-slate-300 border border-slate-500"
                    />
                  </Form.Group>
                  <Form.Group
                    className="flex justify-center mb-2"
                    controlId="dimensions"
                  >
                    <Form.Label className="mr-2">
                      <Typography variant="h4">Dimensions</Typography>
                    </Form.Label>
                    <Form.Control
                      as="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-slate-300 border border-slate-500"
                    />
                  </Form.Group>
                  <Form.Group
                    className="flex justify-center mb-2"
                    controlId="origin"
                  >
                    <Form.Label className="mr-2">
                      <Typography variant="h4">Origin</Typography>
                    </Form.Label>
                    <Form.Control
                      as="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-slate-300 border border-slate-500"
                    />
                  </Form.Group>

                  <Form.Group
                    className="flex justify-center mb-2"
                    controlId="maker"
                  >
                    <Form.Label className="mr-2">
                      <Typography variant="h4">Maker</Typography>
                    </Form.Label>
                    <Form.Control
                      as="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-slate-300 border border-slate-500"
                    />
                  </Form.Group>

                  <Form.Group
                    className="flex justify-center mb-2"
                    controlId="description"
                  >
                    <Form.Label className="mr-2">
                      <Typography variant="h4">Description</Typography>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-slate-300 border border-slate-500"
                    />
                  </Form.Group>
                  <Form.Group
                    className="flex justify-center mb-2"
                    controlId="price"
                  >
                    <Form.Label className="mr-2">
                      <Typography variant="h4">Price</Typography>
                    </Form.Label>
                    <Form.Control
                      as="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-slate-300 border border-slate-500"
                    />
                  </Form.Group>
                </div>

                <div className="flex items-center mt-4" {...getRootProps()}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <Typography variant="body" className="">
                      Drop the files here ...
                    </Typography>
                  ) : (
                    <Typography variant="body" className="">
                      Drag and drop images here, or click here to select.
                    </Typography>
                  )}
                </div>
                {images && (
                  <div className="mt-1">
                    {images.map((image, index) => (
                      <img key={index} src={image.preview} alt="test" />
                    ))}
                  </div>
                )}
                <div className="flex justify-center mt-4 mb-4">
                  <Button type="submit" className="submit">
                    <Typography variant="h3">Create</Typography>
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
