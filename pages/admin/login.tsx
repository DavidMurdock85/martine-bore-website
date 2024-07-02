import { useAuth } from '@mb/providers/AuthProvider'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import * as Yup from 'yup'

const SignIn: React.FC = () => {
  const auth: any = useAuth()
  const router: any = useRouter()
  const [alert, setAlert] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className="flex flex-col my-4">
      <SignInForm
        onSubmit={async (values: any) => {
          setLoading(true)
          try {
            console.log(auth)
            await auth.login(values.user.username, values.user.password)
            router.push('/admin')
          } catch (err) {
            console.log(err)
            setAlert('Failed to sign in')
          } finally {
            setLoading(false)
          }
        }}
        alert={alert}
        setAlert={setAlert}
        loading={loading}
      />
    </div>
  )
}

const SignInForm: React.FC<any> = (props: any) => {
  const { alert, loading, onSubmit, setAlert } = props
  return (
    <Formik
      initialValues={{
        user: { username: '', password: '' },
      }}
      onSubmit={onSubmit}
      validateOnChange={false}
      validationSchema={Yup.object().shape({
        user: Yup.object().shape({
          username: Yup.string().required('*Username is required'),
          password: Yup.string().required('*Password is required'),
        }),
      })}
    >
      {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Form className="sign-in-form" noValidate onSubmit={handleSubmit}>
          <div className="flex flex-row">
            <Form.Group
              className="username flex flex-col"
              controlId="user.username"
            >
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
          </div>
          <div className="flex flex-row">
            <div>
              <Form.Group
                className="password flex flex-col"
                controlId="user.password"
              >
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
            </div>
          </div>
          <Alert
            variant="danger"
            show={!!alert}
            onClose={() => setAlert(null)}
            dismissible
          >
            {alert}
          </Alert>
          <div className="flex flex-row">
            <div className="pt-2">
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
                  <span>Sign In</span>
                )}
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SignIn
