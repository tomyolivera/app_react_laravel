import React, { useContext } from 'react';
import { Form, Formik } from 'formik'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ValidationRegisterSchema } from '../../../Validation';
import UserContext from '../../../context/user';

import StyledFormGroup from '../../Styles/StyledFormGroup';
import SubmitButton from '../../Global/Button/SubmitButton';

const RegisterForm = ({ setIsLoggedIn }) => {
    const { getUser } = useContext(UserContext);
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
                    {/* Name */}
                    <StyledFormGroup name="name"
                                    errors={errors} />

                    {/* Email */}
                    <StyledFormGroup name="email"
                                    errors={errors} />

                    {/* Password */}
                    <StyledFormGroup name="password"
                                    errors={errors} />

                    {/* Repeat Password */}
                    <StyledFormGroup name="repassword"
                                    errors={errors} />

                    {/* Button */}
                    <SubmitButton disabled={isSubmitting}
                                text="Register"
                                submittingText="Creating account"
                                color="green" />
                </Form>
            )}
        </Formik>
    )
}

export default RegisterForm;