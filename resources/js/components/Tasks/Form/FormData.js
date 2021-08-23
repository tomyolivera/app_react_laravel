import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, FormGroup, Label } from 'reactstrap'
import { HasMaxLength, ActualDate } from '../../../helper'

const FormData = ({ toggle, setEditing, editing, taskEditing, onCreate, onUpdate }) => (
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
            editing
                ? onUpdate({ id: taskEditing.id, name, description, finish_date })
                : onCreate({ name, description, finish_date })

            setEditing(false);
            toggle();
        }}
    >
    {({ errors }) => (
            <Form>
                <FormGroup className="mb-3">
                    <Label htmlFor="name">Name</Label>
                    <Field className="form-control"
                            name="name"
                            autoComplete="off"
                    />
                    <ErrorMessage name="name" component={() => <span className="error">{ errors.name }</span>} />
                </FormGroup>

                <FormGroup className="mb-3">
                    <Label htmlFor="description">Description</Label>
                    <Field className="form-control"
                            name="description"
                            autoComplete="off"
                    />
                    <ErrorMessage name="description" component={() => <span className="error">{ errors.description }</span>} />
                </FormGroup>

                <FormGroup className="mb-3">
                    <Label htmlFor="finish_date">Finish Date</Label>
                    <Field className="form-control"
                            type="date"
                            name="finish_date"
                    />
                    <ErrorMessage name="finish_date" component={() => <span className="error">{ errors.finish_date }</span>} />
                </FormGroup>

                <FormGroup className="mb-3">
                    <Button type="submit" color="primary">Save</Button>
                </FormGroup>
            </Form>
        )}
    </Formik>
)

export default FormData
