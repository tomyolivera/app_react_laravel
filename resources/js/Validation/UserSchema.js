import * as Yup from 'yup';

const email = Yup.string().email("Invalid Email").required("Enter a email address");
const name = Yup.string().max(30, "Maximum 30 characters").required("Enter a name");
const password = Yup.string().min(8, "Minimum 8 characters").required("Enter a password");
const repassword = Yup.string().oneOf([Yup.ref("password")], "The passwords do not match").required("Repeat your password");

export const ValidationRegisterSchema = Yup.object().shape({ email, name, password, repassword });

export const ValidationLoginSchema = Yup.object().shape({ email, password });

export const ValidationUserEditSchema = Yup.object().shape({ email, name });

export const ValidationPasswordSchema = Yup.object().shape({ password, repassword });