import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, FormGroup, Label } from 'reactstrap'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ValidationRegisterSchema } from '../../../Validation';

const RegisterForm = ({ setIsLoggedIn, getUser }) => {
    const history = useHistory();

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '', repassword: '' }}
            validationSchema={ValidationRegisterSchema}
            onSubmit={ async ({ name, email, password }) => {
                const res = await axios.post('/register', { name, email, password });

                if(res.status === 201){
                    await getUser();
                    setIsLoggedIn(true);
                    history.push('/');
                }
            }}
        >
        {({ errors, isSubmitting }) => (
                <Form>
                    <FormGroup className="mb-3">
                        <Label>Name</Label>
                        <Field className="form-control" name="name" />
                        <ErrorMessage name="name" component={() => <span className="error">{ errors.name }</span>} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label>Email</Label>
                        <Field className="form-control" name="email" />
                        <ErrorMessage name="email" component={() => <span className="error">{ errors.email }</span>} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label>Password</Label>
                        <Field className="form-control" type="password" name="password" />
                        <ErrorMessage name="password" component={() => <span className="error">{ errors.password }</span>} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label>Repeat Password</Label>
                        <Field className="form-control" type="password" name="repassword" />
                        <ErrorMessage name="repassword" component={() => <span className="error">{ errors.repassword }</span>} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Button type="submit" color="success" disabled={isSubmitting}>
                            {
                                isSubmitting ? 'Creating Account' : 'Register'
                            }
                        </Button>
                    </FormGroup>
                </Form>
            )}
        </Formik>
    )
}

export default RegisterForm;