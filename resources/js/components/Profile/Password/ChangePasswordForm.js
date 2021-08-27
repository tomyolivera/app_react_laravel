import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, FormGroup, Label } from 'reactstrap'
import axios from 'axios';
import CancelButton from '../../Global/CancelButton';
import { ValidationPasswordSchema } from '../../../Validation';

const ChangePasswordForm = ({ user, setEditing, setMessage, callback }) => {
    return (
        <Formik
            initialValues={{ actualpassword: '', password: '', repassword: '', }}
            validate={({ actualpassword }) => {
                let errors = {}

                if(actualpassword === ""){
                    errors.actualpassword = "Enter your actual password"
                }

                return errors;
            }}
            validationSchema={ValidationPasswordSchema}
            onSubmit={ async ({ actualpassword, password }) => {
                try {
                    const res = await axios.put(`/api/user/${user.id}`, { actualpassword, password });
                    await callback();
                    
                    setMessage({
                        text: res.data,
                        color: res.status === 200 ? "success" : "danger"
                    });

                    setEditing(false);
                } catch (e) {
                    setMessage({ text: "Something went wrong", color: 'danger' });
                }
            }}
        >
        {({ errors, isSubmitting }) => (
                <Form>
                    <FormGroup>
                        <Label>Actual Password</Label>
                        <Field className="form-control" type="password" name="actualpassword" />
                        <ErrorMessage name="actualpassword" component={() => <span className="error">{ errors.actualpassword }</span>} />
                    </FormGroup>

                    <FormGroup>
                        <Label>New Password</Label>
                        <Field className="form-control" type="password" name="password" />
                        <ErrorMessage name="password" component={() => <span className="error">{ errors.password }</span>} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Repeat New Password</Label>
                        <Field className="form-control" type="password" name="repassword" />
                        <ErrorMessage name="repassword" component={() => <span className="error">{ errors.repassword }</span>} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <button type="submit" className="button btn-green" disabled={isSubmitting}>
                            { isSubmitting ? 'Saving' : 'Save' }
                        </button>
                        <CancelButton callback={setEditing} />
                    </FormGroup>
                </Form>
            )}
        </Formik>
    )
}

export default ChangePasswordForm;