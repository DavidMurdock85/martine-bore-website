import { Base, Col, Flex, Row } from "@mb/components/layout";
import { PageWrapper } from "@mb/components/PageWrapper";
import { sendContactRequest } from "@mb/services/SupportService";
import { Formik } from "formik";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";

const ContactUs: React.FC<any> = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = async (values: any) => {
    await sendContactRequest(values.support);
    setSubmitted(true);
  };

  return <PageWrapper
    description="A contact form for Martine Boré Antiques"
    title="Contact Martine Boré Antiques"
  >
    <Base className="contact-us">
      <Flex flexDirection="column" alignItems="center" mt={4}>
        {submitted ? (
          <Flex flexDirection="column" alignItems="flex-start" mb={6} mt={4}>
            <Base tag="h2">Thanks!</Base>
            <Base tag="p">We&apos;ll get back to you as soon as possible.</Base>
          </Flex>
        ) : (
          <Formik
            initialValues={{
              support: { firstName: "", lastName: "", body: "", email: "" },
            }}
            onSubmit={onSubmit}
            validateOnChange={false}
            validationSchema={Yup.object().shape({
              support: Yup.object().shape({
                body: Yup.string().required("Provide us with a little more information"),
                firstName: Yup.string().notRequired(),
                lastName: Yup.string().notRequired(),
                email: Yup.string()
                  .email("*Must be a valid email address")
                  .required("Let us know how to get in contact with you"),
              }),
            })}
          >
            {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <Form className="contact-us-form" noValidate onSubmit={handleSubmit}>
                <Flex flexDirection="column" alignItems="flex-start" mb={4}>
                  <Base tag="h2">Contact us</Base>
                  <Base tag="p">
                    Having trouble? Want to ask a question? Something you want to know more about? Get in touch!
                  </Base>
                </Flex>
                <Form.Group controlId="support.email">
                  <Form.Label>Your email address</Form.Label>
                  <Form.Control
                    as="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={errors.support && !!errors.support.email && touched.support && touched.support.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.support && errors.support.email}</Form.Control.Feedback>
                </Form.Group>
                <Row className="no-gutters" mt={2}>
                  <Col mr={1}>
                    <Form.Group controlId="support.firstName">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        as="input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.support && !!errors.support.firstName && touched.support &&  touched.support.firstName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.support && errors.support.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col ml={1}>
                    <Form.Group controlId="support.lastName">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        as="input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.support && !!errors.support.lastName && touched.support && touched.support.lastName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.support && errors.support.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Base mt={2}>
                  <Form.Group controlId="support.body">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={4}
                      isInvalid={errors.support && !!errors.support.body && touched.support && touched.support.body}
                    />
                    <Form.Control.Feedback type="invalid">{errors.support && errors.support.body}</Form.Control.Feedback>
                  </Form.Group>
                </Base>
                <Flex mt={2} flexDirection="rowReverse">
                  <Button type="submit" className="submit">
                    Submit
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        )}
      </Flex>
    </Base>
  </PageWrapper>
};

export default ContactUs;
