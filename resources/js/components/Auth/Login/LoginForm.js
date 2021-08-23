import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, FormGroup, Label } from 'reactstrap'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Loading from '../../Loading';

const LoginForm = ({ setIsLoggedIn }) => {
    const [isValid, setIsValid] = useState(true);
    let history = useHistory();

    return (
        <Formik
            initialValues={{
                email: '', password: ''
            }}
            onSubmit={async ({ email, password }) => {
                try {
                    await axios.post('/login', { email, password });
                    setIsLoggedIn(true);
                    setIsValid(true);
                    history.push('/');
                } catch (e) {
                    setIsValid(false);
                }
            }}
        >
        {({ isSubmitting }) => (
                <Form>
                    <FormGroup className="mb-3">
                        <Label htmlFor="email">Email</Label>
                        <Field className="form-control"
                                name="email"
                                autoComplete="off"
                        />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label htmlFor="password">Password</Label>
                        <Field className="form-control"
                                type="password"
                                name="password"
                        />
                    </FormGroup>

                    <FormGroup className="mb-3 d-flex">
                        <Button type="submit" color="dark" disabled={isSubmitting}>
                            Log In
                        </Button>

                        {
                            !isValid && <span className="align-self-center error mx-3" style={{fontSize: 18}}>The email or password is invalid</span>
                        }
                    </FormGroup>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;