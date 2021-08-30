import React from 'react'
import { upperFirst } from 'lodash'
import { FormGroup, Label } from 'reactstrap'
import StyledField from './Input'
import { ErrorMessage } from 'formik'

const StyledFormGroup = ({ name, type="text", errors, hasLabel=true, labelText }) => {
    const inputType = name.includes("password")
                        ? "password"
                        : name.includes("date")
                            ? "date"
                            : type;

    const label = name.includes("re")
                    ? `Repeat ${upperFirst(name.substr(2))}`
                    : labelText || upperFirst(name) 

    return (
        <FormGroup className="mb-3">
            { hasLabel && <Label htmlFor={name}>{ label }</Label> }
            <StyledField name={name} type={inputType} />
            <ErrorMessage name={name} component={
                () => <span className="error">
                            { errors[name] }
                        </span>
                }
            />
        </FormGroup>
    )
}

export default StyledFormGroup;
