import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, FormGroup, Label } from 'reactstrap'
import { HasMaxLength } from '../../../helper'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const RegisterForm = ({ setIsLoggedIn }) => {
    let history = useHistory();

    return (
        <Formik
            initialValues={{
                name: '', email: '', password: '', repassword: ''
            }}
            validate={({ name, email, password, repassword }) => {
                let errors = {};

                if(!name){
                    errors.name = "Please enter a name";
                } else if (!HasMaxLength(name, 30)){
                    errors.name = "The name must be less than 30 characters";
                }

                return errors;
            }}
            onSubmit={ async ({ name, email, password }) => {
                const res = await axios.post('/register', { name, email, password });

                if(res.status === 201){
                    setIsLoggedIn(true);
                    history.push('/');
                }
            }}
        >
        {({ errors, isSubmitting }) => (
                <Form>
                    <FormGroup className="mb-3">
                        <Label htmlFor="name">Name</Label>
                        <Field className="form-control"
                                name="name"
                                autoComplete="off"
                        />
                        <ErrorMessage name="name" component={() => <span className="error">{ errors.name }</span>} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label htmlFor="email">Email</Label>
                        <Field className="form-control"
                                name="email"
                                autoComplete="off"
                        />
                        <ErrorMessage name="email" component={() => <span className="error">{ errors.email }</span>} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label htmlFor="password">Password</Label>
                        <Field className="form-control"
                                type="password"
                                name="password"
                        />
                        <ErrorMessage name="password" component={() => <span className="error">{ errors.password }</span>} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label htmlFor="repassword">Repeat Password</Label>
                        <Field className="form-control"
                                type="password"
                                name="repassword"
                        />
                        <ErrorMessage name="repassword" component={() => <span className="error">{ errors.repassword }</span>} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Button type="submit" color="success" disabled={isSubmitting}>
                            Register
                        </Button>
                    </FormGroup>
                </Form>
            )}
        </Formik>
    )
}

export default RegisterForm;