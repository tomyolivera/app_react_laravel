import React, { useContext } from 'react'
import { Field } from 'formik'
import ThemeContext from '../../context/theme'

const StyledField = ({ name, type="text", disabled=false, autoComplete="off" }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Field
            name={name}
            type={type}
            autoComplete={autoComplete}
            disabled={disabled}
            className={`form-control ${theme === "dark" ? 'bg-dark text-light' : ''}`}
        />
    )
}

export default StyledField;
