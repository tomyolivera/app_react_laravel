import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, FormGroup, Label } from 'reactstrap'
import axios from 'axios';
import CancelButton from '../../Global/CancelButton';
import { ValidationUserEditSchema } from '../../../Validation/';

const ProfileForm = ({ user, setMessage, setEditing, callback }) => {
    return (
        <Formik
            initialValues={user}
            validationSchema={ValidationUserEditSchema}
            onSubmit={ async ({ name, email, status }) => {
                if(user.name === name && user.email === email && user.status === status)
                    return setEditing(false);
                
                try {
                    const res = await axios.put(`/api/user/${user.id}`, { name, email, status });
                    await callback();

                    setMessage({text: res.data, color: "success" });
                } catch (e) {
                    setMessage({ text: "Something went wrong", color: 'danger' });
                } finally {
                    setEditing(false);
                }
            }}
        >
        {({ errors, isSubmitting }) => (
                <Form>
                    {/* Name */}
                    <div className="row py-2">
                        <Label className="col-sm-12 col-lg-3">Name</Label>
                        <span className="col-sm-12 col-lg-9">
                            <Field className="form-control" name="name" disabled={isSubmitting} />
                            <ErrorMessage name="name" component={() => <span className="error">{ errors.name }</span>} />
                        </span>
                    </div> <hr className="m-0" />

                    {/* Email */}
                    <div className="row py-2">
                        <Label className="col-sm-12 col-lg-3">Email</Label>
                        <span className="col-sm-12 col-lg-9">
                            <Field className="form-control" name="email" disabled={isSubmitting} />
                            <ErrorMessage name="email" component={() => <span className="error">{ errors.email }</span>} />
                        </span>
                    </div> <hr className="m-0" />

                    {/* Status */}
                    <div className="row py-2">
                        <Label className="col-sm-12 col-lg-3">Status</Label>
                        <span className="col-sm-12 col-lg-9">
                            <Field className="form-control" name="status" as="select" disabled={isSubmitting}>
                                <option value="0">Offline</option>
                                <option value="1">Online</option>
                                <option value="2">Busy</option>
                            </Field>
                            <ErrorMessage name="status" component={() => <span className="error">{ errors.status }</span>} />
                        </span>
                    </div>

                    <FormGroup className="mt-3">
                        <Button type="submit" color="success" disabled={isSubmitting}>{ isSubmitting ? 'Saving' : 'Save' }</Button>
                        <CancelButton callback={setEditing} />
                    </FormGroup>
                </Form>
            )}
        </Formik>
    )
}

export default ProfileForm;