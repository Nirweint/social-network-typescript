import React from 'react';
import s from "./AddMessageForm.module.css";
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";

type AddMessageFormPropsType = {
    onSubmit: (newMessage: string) => void
}
type AddMessageFormValues = {
    message: string
}

export const AddMessageForm = (props: AddMessageFormPropsType) => {

    const addPostFormValidate = (values: AddMessageFormValues) => {
        let errors: Partial<AddMessageFormValues> = {};
        if (!values.message) {
            errors.message = 'Field is required';
        } else if (values.message.length > 50) {
            errors.message = 'Max Length is 50 symbols';
        }
        return errors
    }

    const initValues = {
        message: '',
    }

    const onSubmitHandler = (
        values: AddMessageFormValues,
        {setSubmitting, resetForm}: FormikHelpers<AddMessageFormValues>
    ) => {
        props.onSubmit(values.message)
        resetForm({values: {message: ''}})
        setSubmitting(false);
    }

    return (
        <Formik initialValues={initValues}
                onSubmit={onSubmitHandler}
                validate={addPostFormValidate}
        >
            <Form className={s.body}>
                <Field
                    className={s.inputItem}
                    name="message"
                    component={'input'}
                />
                <button type="submit" className={s.inputBtn}>Add</button>
                <ErrorMessage name="message" component="div" className={s.error}/>
            </Form>
        </Formik>

    );
}