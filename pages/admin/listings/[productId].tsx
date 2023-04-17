import { AdminWrapper } from "@mb/components/AdminWrapper";
import { Image } from "@mb/components/elements";
import { Base, Center, Col, Flex, Row } from "@mb/components/layout";
import {
  addImagesToListing,
  Listing,
  updateListing,
  deleteImage,
} from "@mb/services/AdminService";
import { get } from "@mb/services/FetchService";
import { Category } from "@mb/services/types";
import { IMAGES_BASE_URL } from "@mb/utils/constants";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDropzone } from "react-dropzone";

// Define the EditListing functional component
const EditListing: React.FC = () => {
  // Set up state variables using the useState hook
  const [categories, setCategories] = useState<Category[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [listing, setListing] = useState<Listing>({ categoryId: 1, id: 1 });

  // Use the useRouter hook to access the router object
  const nextJSRouter = useRouter();

  // Destructure the productId from the router's query object
  const { productId } = nextJSRouter.query;

  // Define the onSubmit function, which is called when the form is submitted
  const onSubmit = async (values: Listing) => {
    try {
      // Call the updateListing function and store the result in updatedListing
      const updatedListing = await updateListing(values);
      // If images have been uploaded, call the addImagesToListing function
      if (images.length > 0) {
        await addImagesToListing(updatedListing.id, images);
      }
      // Redirect the user to the updated listing's page
      window.location.href = `/products/${updatedListing.route}`;
    } catch (err) {
      console.log(err);
    }
  };

  // Set up the useDropzone hook to handle file uploads
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      // When files are dropped, create preview URLs and add the files to the images array
      const additionalImages = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setImages(images.concat(additionalImages));
    },
  });

  // Use the useEffect hook to fetch categories from the API on component mount
  useEffect(() => {
    (async () => {
      setCategories(await get<Category[]>("/categories"));
    })();
  }, []);

  // Use the useEffect hook to fetch the listing with the given productId when it changes
  useEffect(() => {
    (async () => {
      if (productId) {
        setListing(await get<Listing>(`/products/${productId}`));
      }
    })();
  }, [productId]);

  return (
    <AdminWrapper>
      <Base className="new-product">
        <Flex flexDirection="column" alignItems="center" mt={4}>
          <Formik
            initialValues={listing}
            enableReinitialize={true}
            onSubmit={onSubmit}
            validateOnChange={false}
          >
            {({
              errors,
              touched,
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
                <Flex flexDirection="column" alignItems="flex-start" mb={4}>
                  <Base tag="h2">Edit listing: {listing.title}</Base>
                  <Base tag="p">Use this form to edit a product listing</Base>
                </Flex>

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
                        <Base
                          tag="option"
                          key={category.id}
                          value={category.id}
                        >
                          {category.title}
                        </Base>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="period">
                      <Form.Label>Period</Form.Label>
                      <Form.Control
                        as="input"
                        value={values.period}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="medium">
                      <Form.Label>Medium</Form.Label>
                      <Form.Control
                        as="input"
                        value={values.medium}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="date">
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        as="input"
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="dimensions">
                      <Form.Label>Dimensions</Form.Label>
                      <Form.Control
                        as="input"
                        value={values.dimensions}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="origin">
                      <Form.Label>Origin</Form.Label>
                      <Form.Control
                        as="input"
                        value={values.origin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="maker">
                      <Form.Label>Maker</Form.Label>
                      <Form.Control
                        as="input"
                        value={values.maker}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                  </Col>
                </Row>
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
                  <Flex flexDirection="column" mt={1}>
                    <Base>Existing Images</Base>
                    <Flex className="images" mt={1}>
                      {listing.images?.map((image, index) => {
                        return (
                          <Base key={index}>
                            <Image
                              src={`${IMAGES_BASE_URL}/${image.thumbnail}`}
                              alt=""
                            />

                            {/*button to handle deletion of an individual image in a listing*/}
                            <Button
                              className="image-removal"
                              onClick={() => {
                                deleteImage(image.id);
                              }}
                            >
                              x
                            </Button>
                          </Base>
                        );
                      })}
                    </Flex>
                  </Flex>
                )}

                <Center className="dropzone" {...getRootProps()} mt={4}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <Base className="drop-here-active">
                      Drop the files here ...
                    </Base>
                  ) : (
                    <Base className="drop-here">
                      Drag and drop images here, or click here to select.
                    </Base>
                  )}
                </Center>
                {images && (
                  <Flex className="images" mt={1}>
                    {images.map((image, index) => (
                      <Image key={index} src={image.preview} alt="" />
                    ))}
                  </Flex>
                )}
                <Flex mt={2} flexDirection="rowReverse">
                  <Button type="submit" className="submit">
                    Update
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Flex>
      </Base>
    </AdminWrapper>
  );
};

export default EditListing;
