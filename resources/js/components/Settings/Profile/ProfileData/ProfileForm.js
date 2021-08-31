import React, { useContext } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import axios from 'axios';
import CancelButton from '../../../Global/Button/CancelButton';
import { ValidationUserEditSchema } from '../../../../Validation/';
import SubmitButton from '../../../Global/Button/SubmitButton';
import ThemeContext from '../../../../context/theme';
import StyledField from '../../../Styles/Input';
import StyledFormGroup from '../../../Styles/StyledFormGroup'

const ProfileForm = ({ user, setMessage, setEditing, callback }) => {
    const { theme }  = useContext(ThemeContext)

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
                        <b className="col-sm-12 col-lg-3">Name</b>
                        <span className="col-sm-12 col-lg-9">
                            <StyledFormGroup name="name"
                                            hasLabel={false}
                                            separateFields={false}
                                            errors={errors} />
                        </span>
                    </div>

                    {/* Email */}
                    <div className="row py-2">
                        <b className="col-sm-12 col-lg-3">Email</b>
                        <span className="col-sm-12 col-lg-9">
                            <StyledFormGroup name="email"
                                        hasLabel={false}
                                        separateFields={false}
                                        errors={errors} />
                        </span>
                    </div>

                    {/* Status */}
                    <div className="row py-2">
                        <b className="col-sm-12 col-lg-3">Status</b>
                        <span className="col-sm-12 col-lg-9">
                            <Field className={`form-control ${theme === "dark" ? 'bg-dark text-light' : ''}`}
                                    name="status"
                                    as="select"
                                    disabled={isSubmitting}
                                >
                                <option value="0">Offline</option>
                                <option value="1">Online</option>
                                <option value="2">Busy</option>
                            </Field>
                            <ErrorMessage name="status" component={() => <span className="error">{ errors.status }</span>} />
                        </span>
                    </div>

                    <div className="mt-3">
                        <SubmitButton disabled={isSubmitting} />
                        <CancelButton callback={setEditing} />
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ProfileForm;