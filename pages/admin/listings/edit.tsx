import { AdminWrapper } from "@mb/components/AdminWrapper";
import { Image } from "@mb/components/elements";
import { Base, Center, Col, Flex, Row } from "@mb/components/layout";
import { addImagesToListing, createNewListing, NewListing } from "@mb/services/AdminService";
import { get } from "@mb/services/FetchService";
import { Category, Product } from "@mb/services/types";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDropzone } from "react-dropzone";

const EditListing: React.FC = () => {
  const [submitted, setSubmitted] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [images, setImages] = useState<any[]>([]);

  const fetchCategories = async () => {
    setCategories(await get<Category[]>("/categories"));
  };

  const onSubmit = async (values: NewListing) => {
    try {
      const createdListing = await createNewListing(values);
      const addedImages = await addImagesToListing(createdListing.id, images);
      setSubmitted(submitted.concat({
        ...createdListing,
        images: addedImages
      }));
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
    fetchCategories();
  }, []);

  return <AdminWrapper>
    <Base className="new-product">
      { submitted &&
        <Flex>
          { submitted.map(submitted => {
            return <Base key={ submitted.id } tag='a' href={`/products/${submitted.route}`}>{ submitted.title }</Base>
          })}
        </Flex>
      }
      <Flex flexDirection="column" alignItems="center" mt={4}>
        <Formik
          initialValues={{
            categoryId: 1,
            title: "",
            period: "",
            date: "",
            origin: "",
            maker: "",
            medium: "",
            description: "",
            dimensions: "",
            price: ""
          }}
          onSubmit={onSubmit}
          validateOnChange={false}
        >
          {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Form className="contact-us-form" noValidate onSubmit={handleSubmit}>
              <Flex flexDirection="column" alignItems="flex-start" mb={4}>
                <Base tag="h2">Add a new listing</Base>
                <Base tag="p">
                  Use this form to edit a product listing
                </Base>
              </Flex>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  as="input"
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
              <Center className="dropzone" {...getRootProps()} mt={4}>
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <Base className="drop-here-active">Drop the files here ...</Base> :
                    <Base className="drop-here">Drag and drop images here, or click here to select.</Base>
                }
              </Center>
              {images && <Flex className="images" mt={1}>
                {images.map((image, index) => <Image key={index} src={image.preview} alt="test" />)}
              </Flex>}
              <Flex mt={2} flexDirection="rowReverse">
                <Button type="submit" className="submit">
                  Create
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