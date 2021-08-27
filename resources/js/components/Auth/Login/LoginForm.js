import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, FormGroup, Label } from 'reactstrap'

import { ValidationLoginSchema } from '../../../Validation';

import { useFlashMessage } from '../../../CustomHooks/useFlashMessage';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

const LoginForm = ({ getUser, setIsLoggedIn }) => {
    const { messageJsx, setMessage } = useFlashMessage();
    const history = useHistory();

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={ValidationLoginSchema}
            onSubmit={async ({ email, password }) => {
                try {
                    await axios.post('/login', { email, password });
                    await getUser();
                    setIsLoggedIn(true)
                    history.push('/');
                } catch (e) {
                    setMessage({ text: "The email or the password is incorrect!", color: "danger" });
                }
            }}
        >
        {({ errors, isSubmitting }) => (
                <Form>
                    <FormGroup className="mb-3">
                        <Label>Email</Label>
                        <Field className="form-control" name="email" />
                        <ErrorMessage name="email" component={() => <span className="error">{errors.email}</span>} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label>Password</Label>
                        <Field className="form-control" name="password" type="password" />
                        <ErrorMessage name="password" component={() => <span className="error">{errors.password}</span>} />
                    </FormGroup>

                    <FormGroup className="mb-3 d-flex">
                        <Button type="submit" color="dark" disabled={isSubmitting}>
                            { isSubmitting ? 'Logging In' : 'Log In' }
                        </Button>

                        { messageJsx }
                    </FormGroup>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;