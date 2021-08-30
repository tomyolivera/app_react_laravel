import React, { useContext } from 'react'
import { Form, Formik } from 'formik'

import { ValidationLoginSchema } from '../../../Validation';

import { useFlashMessage } from '../../../CustomHooks/useFlashMessage';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import UserContext from '../../../context/user';
import SubmitButton from '../../Global/Button/SubmitButton';
import StyledFormGroup from '../../Styles/StyledFormGroup'

const LoginForm = ({ setIsLoggedIn }) => {
    const { getUser } = useContext(UserContext);
    const { messageJsx, setMessage } = useFlashMessage();
    const history = useHistory();

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={ValidationLoginSchema}
            onSubmit={async ({ email, password }) => {
                try {
                    await axios.post('/login', { email, password });
                    await getUser();
                    setIsLoggedIn(true)
                    history.push('/');
                } catch (e) {
                    setMessage({ text: "The email or the password is incorrect!", color: "danger" });
                }
            }}
        >
        {({ errors, isSubmitting }) => (
                <Form>
                    {/* Email */}
                    <StyledFormGroup name="email"
                                    error={errors} />

                    {/* Password */}
                    <StyledFormGroup name="password"
                                    error={errors} />

                    {/* Button */}
                    <div className="d-flex">
                        <SubmitButton disabled={isSubmitting}
                                    text="Log In"
                                    submittingText="Logging In"
                                />
                        { messageJsx }
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;