import { AdminWrapper } from "@mb/components/AdminWrapper";
import { Image } from "@mb/components/elements";
import { Base, Center, Col, Flex, Row } from "@mb/components/layout";
import { addImagesToListing, Listing, updateListing } from "@mb/services/AdminService";
import { get } from "@mb/services/FetchService";
import { Category } from "@mb/services/types";
import { IMAGES_BASE_URL } from "@mb/utils/constants";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDropzone } from "react-dropzone";

const EditListing: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [listing, setListing] = useState<Listing>({ categoryId: 1, id: 1 });

  //get nextJSRouter which will be used to fetch info from the url path that has been queried
  const nextJSRouter = useRouter();

  // tying productId to the value from the url path thats been queried
  const { productId } = nextJSRouter.query;

  const onSubmit = async (values: Listing) => {
    try {
      const updatedListing = await updateListing(values);
      if(images.length > 0) {
        await addImagesToListing(updatedListing.id, images);
      }

      window.location.href = `/products/${updatedListing.route}`;
    } catch (err) {
      console.log(err);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      const additionalImages = acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
      }));
      setImages(images.concat(additionalImages));
    }
  });

  useEffect(() => {
    (async () => {
      setCategories(await get<Category[]>("/categories"));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (productId) {
        setListing(await get<Listing>(`/products/${productId}`));
      }
    })();
  }, [productId]);

  return <AdminWrapper>
    <Base className="new-product">
      <Flex flexDirection="column" alignItems="center" mt={4}>
        <Formik
          initialValues={listing}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validateOnChange={false}
        >
          {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
            <Form className="contact-us-form" noValidate onSubmit={handleSubmit}>
              <Flex flexDirection="column" alignItems="flex-start" mb={4}>
                <Base tag="h2">Edit listing: { listing.title }</Base>
                <Base tag="p">
                  Use this form to edit a product listing
                </Base>
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
              <Form.Group controlId="catalogueId">
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
                      <Base tag="option" key={category.id} value={category.id}>
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
                      return <Image key={index} src={`${IMAGES_BASE_URL}/${image.thumbnail}`} alt="" />
                    })}
                  </Flex>
                </Flex>
              )}
              <Center className="dropzone" {...getRootProps()} mt={4}>
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <Base className="drop-here-active">Drop the files here ...</Base> :
                    <Base className="drop-here">Drag and drop images here, or click here to select.</Base>
                }
              </Center>
              {images && <Flex className="images" mt={1}>
                {images.map((image, index) => <Image key={index} src={image.preview} alt="" />)}
              </Flex>}
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
};

export default EditListing;