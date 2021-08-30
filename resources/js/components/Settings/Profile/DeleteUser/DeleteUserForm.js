import React from 'react'
import { Form, Formik } from 'formik'
import axios from 'axios';
import CancelButton from '../../../Global/Button/CancelButton';
import StyledFormGroup from '../../../Styles/StyledFormGroup';
import SubmitButton from '../../../Global/Button/SubmitButton';

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
        {({ errors, isSubmitting }) => (
                <>
                    <div className="rounded p-3 bg-dark text-light mb-3">
                        <h5 className="text-danger">Are you sure you want to delete your user account?</h5>
                        <p>You will lost: </p>
                        <p>- All your actual tasks</p>
                        <p>- All your API's App</p>
                        <p>- All your friends</p>
                    </div>
                    <Form>
                        {/* Password */}
                        <StyledFormGroup name="password" 
                                        errors={errors} />

                        {/* Repeat Password */}
                        <StyledFormGroup name="repassword" 
                                        errors={errors} />

                        {/* Buttons */}
                        <>
                            <SubmitButton disabled={isSubmitting}
                                        color="red"
                                        text="Delete"
                                        submittingText="Deleting"
                                    />
                            <CancelButton callback={setEditing} />
                        </>
                    </Form>
                </>
            )}
        </Formik>
    )
}

export default DeleteUserForm
