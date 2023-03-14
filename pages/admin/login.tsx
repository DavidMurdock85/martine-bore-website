import { Base, Center } from "@mb/components/layout";
import { useAuth } from "@mb/providers/AuthProvider";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import * as Yup from "yup";

// SignIn component that renders a SignInForm and handles the submission
const SignIn: React.FC = () => {
  // Get the authentication object and router object from context
  const auth: any = useAuth();
  const router: any = useRouter();
  // State to hold error message
  const [alert, setAlert] = useState<string>();
  // State to indicate if form is loading or not
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Center className="sign-in" flexDirection="column" my={4}>
      {/* Render the SignInForm component */}
      <SignInForm
        onSubmit={async (values: any) => {
          setLoading(true);
          try {
            // Call the auth.login method to attempt login
            await auth.login(values.user.username, values.user.password);
            // If successful, redirect to admin page
            router.push("/admin");
          } catch (err) {
            // If unsuccessful, set the error message
            setAlert("Failed to sign in");
          } finally {
            setLoading(false);
          }
        }}
        alert={alert}
        setAlert={setAlert}
        loading={loading}
      />
    </Center>
  );
};

// SignInForm component that displays the form fields and handles form submission
const SignInForm: React.FC<any> = (props: any) => {
  // Get props from parent component
  const { alert, loading, onSubmit, setAlert } = props;
  return (
    <Formik
      initialValues={{
        user: { username: "", password: "" },
      }}
      onSubmit={onSubmit}
      validateOnChange={false}
      validationSchema={Yup.object().shape({
        user: Yup.object().shape({
          username: Yup.string().required("*Username is required"),
          password: Yup.string().required("*Password is required"),
        }),
      })}
    >
      {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Form className="sign-in-form" noValidate onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="username" controlId="user.username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={loading}
                isInvalid={
                  errors.user &&
                  !!errors.user.username &&
                  touched.user &&
                  touched.user.username
                }
              />
              <Form.Control.Feedback type="invalid">
                {errors.user && errors.user.username}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Base>
              <Form.Group className="password" controlId="user.password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={loading}
                  isInvalid={
                    errors.user &&
                    !!errors.user.password &&
                    touched.user &&
                    touched.user.password
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors.user && errors.user.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Base>
          </Row>
          <Alert
            variant="danger"
            show={!!alert}
            onClose={() => setAlert(null)}
            dismissible
          >
            {alert}
          </Alert>
          <Row>
            <Base pt={2}>
              <Button
                type="submit"
                className="submit justify-content-center align-items-center"
                disabled={loading}
              >
                {loading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    role="status"
                    aria-hidden="true"
                    className="save-btn-spinner"
                  />
                ) : (
                  <Base as="span">Sign In</Base>
                )}
              </Button>
            </Base>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
