import React from 'react'
import { Form, Formik } from 'formik'
import axios from 'axios';
import CancelButton from '../../../Global/Button/CancelButton';
import StyledFormGroup from '../../../Styles/StyledFormGroup';
import SubmitButton from '../../../Global/Button/SubmitButton';
import { ValidationPasswordSchema } from '../../../../Validation';

const DisableUserForm = ({ user, setEditing, setMessage, callback }) => {
    return (
        <Formik
            initialValues={{ disabled: user.disabled, password: '', repassword: ''}}
            validationSchema={ValidationPasswordSchema}
            onSubmit={ async ({ disabled, password }) => {
                try {
                    const res = await axios.put(`/api/user/${user.id}`, { disabled, password });
                    console.log(res);
                    // await callback();
                    
                    setMessage({
                        text: res.data,
                        color: res.status === 200 ? "success" : "danger"
                    });
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
                    <Form>
                        {/* Password */}
                        <StyledFormGroup name="password" 
                                        errors={errors} />

                        {/* Repeat Password */}
                        <StyledFormGroup name="repassword" 
                                        errors={errors} />

                        {/* Buttons */}
                        <div>
                            <SubmitButton disabled={isSubmitting}
                                        color={user.disabled ? "green" : "red"}
                                        text={user.disabled ? "Enable" : "Disable"}
                                        submittingText={user.disabled ? "Enabling" : "Disabling"}
                                    />
                            <CancelButton callback={setEditing} />
                        </div>
                    </Form>
                </>
            )}
        </Formik>
    )
}

export default DisableUserForm
