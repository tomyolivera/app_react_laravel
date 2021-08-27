import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, FormGroup, Label } from 'reactstrap'
import axios from 'axios';
import CancelButton from '../../Global/CancelButton';

const DeleteUserForm = ({ user, setEditing, setMessage, callback }) => {
    return (
        <Formik
            initialValues={{ password: '', repassword: '' }}
            validate={({ password, repassword }) => {
                let errors = {};

                if(password.length <= 8){
                    errors.password = "Please enter a valid password";
                }

                if(password !== repassword){
                    errors.repassword = "The passwords do not match";
                }

                return errors;
            }}
            onSubmit={ async ({ password, repassword }) => {
                if(password === '' || repassword === '') {
                    return setEditing(false);
                }

                try {
                    console.log({ password, repassword });
                    // const res = await axios.put(`/api/user/${user.id}/changePassword`, { password });
                    
                    // await callback();
                    
                    // setMessage({
                    //     text: res.data,
                    //     color: res.status === 200 ? "success" : "danger"
                    // });
                } catch (e) {
                    console.log(e);
                    setMessage({ text: "Something went wrong", color: 'danger' });
                } finally {
                    // setEditing(false);
                }
            }}
        >
        {({ errors, isSubmitting, isValid }) => (
                <>
                    <div className="rounded p-3 bg-dark text-light mb-3">
                        <h5 className="text-danger">Are you sure you want to delete your user account?</h5>
                        <p>You will lost: </p>
                        <p>- All your actual tasks</p>
                        <p>- All your API's App</p>
                        <p>- All your friends</p>
                    </div>
                    <Form>
                        {/* User Password */}
                        Password
                        <Field className="form-control mb-3"
                            type="password"
                            name="password"
                            autoComplete="off"
                        />
                        <ErrorMessage name="password" component={() => <span className="error">{ errors.password }</span>} />

                        {/* Repeat Password */}
                        Repeat Password
                        <Field className="form-control mb-3"
                            type="password"
                            name="repassword"
                            autoComplete="off"
                        />
                        <ErrorMessage name="repassword" component={() => <span className="error">{ errors.repassword }</span>} />

                        {/* Buttons */}
                        <Button type="submit" color="danger" disabled={isSubmitting || !isValid}>
                            { isSubmitting ? 'Deleting' : 'Delete' }
                        </Button>
                        <CancelButton callback={setEditing} />
                    </Form>
                </>
            )}
        </Formik>
    )
}

export default DeleteUserForm
