import { AdminWrapper } from "@mb/components/AdminWrapper";
import { Base, Col, Flex, Row } from "@mb/components/layout";
import { createNewListing, NewListing } from "@mb/services/AdminService";
import { Category, Product } from "@mb/services/types";
import { Formik } from "formik";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const CreateListing: React.FC = () => {
  const [submitted, setSubmitted] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const onSubmit = async (values: NewListing) => {
    const createdListing = await createNewListing(values);
    setSubmitted(submitted.concat(createdListing));
  };

  return <AdminWrapper>
    <Base className="new-listing">
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
            productTitle: "",
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
                  Use this form to add a new product listing
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
                  as="input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
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

export default CreateListing;