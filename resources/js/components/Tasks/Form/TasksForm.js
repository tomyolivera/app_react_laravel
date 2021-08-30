import React from 'react'
import { Form, Formik } from 'formik'
import { HasMaxLength, ActualDate } from '../../../helper'

import StyledFormGroup from '../../Styles/StyledFormGroup'
import SubmitButton from '../../Global/Button/SubmitButton'

const TasksForm = ({ toggle, setEditing, editing, taskEditing, onCreate, onUpdate }) => (
    <Formik
        initialValues={editing ? taskEditing : {
            name: '', description: '', finish_date: ActualDate()
        }}
        validate={({ name, description, finish_date }) => {
            let errors = {};

            if(!name){
                errors.name = "Please enter a name";
            } else if (!HasMaxLength(name, 30)){
                errors.name = "The name must be less than 30 characters";
            }

            if(!HasMaxLength(description, 50)){
                errors.description = "The description must be less than 50 characters";
            }

            if(!finish_date){
                errors.finish_date = "Please enter a date";
            }

            return errors;
        }}
        onSubmit={({ name, description, finish_date }) => {
            (async function(){
                try{
                    await editing
                        ? onUpdate({ id: taskEditing.id, name, description, finish_date })
                        : onCreate({ name, description, finish_date })
                } finally{
                    setEditing(false);
                    toggle();
                }
            })()
        }}
    >
    {({ errors, isSubmitting }) => (
            <Form>
                {/* Name */}
                <StyledFormGroup name="name"
                                errors={errors} />

                {/* Description */}
                <StyledFormGroup name="description"
                                errors={errors} />

                {/* Finish Date */}
                <StyledFormGroup name="finish_date"
                                errors={errors} />

                {/* Button */}
                <SubmitButton disabled={isSubmitting} />
            </Form>
        )}
    </Formik>
)

export default TasksForm
