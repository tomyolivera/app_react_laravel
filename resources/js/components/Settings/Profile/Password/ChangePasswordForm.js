import React from 'react'
import { Form, Formik } from 'formik'
import CancelButton from '../../../Global/Button/CancelButton';

import axios from 'axios';

import { ValidationPasswordSchema } from '../../../../Validation/';
import SubmitButton from '../../../Global/Button/SubmitButton';
import StyledFormGroup from '../../../Styles/StyledFormGroup';

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
                   {/* Actual Password */}
                   <StyledFormGroup name="actualpassword"
                                        labelText="Actual Password"
                                        errors={errors} />

                    {/* New Password */}
                    <StyledFormGroup name="password"
                                        labelText="New Password"
                                        errors={errors} />
                    
                    {/* New Password */}
                    <StyledFormGroup name="repassword"
                                        labelText="Repeat New Password"
                                        errors={errors} />

                    <>
                        <SubmitButton disabled={isSubmitting} />
                        <CancelButton callback={setEditing} />
                    </>
                </Form>
            )}
        </Formik>
    )
}

export default ChangePasswordForm;