import React from 'react';
import {Field, Form, Formik, FormikHelpers} from "formik";

type AddPostFormPropsType = {
    onSubmit: (newMessage: string) => void
}

export const AddPostForm = (props: AddPostFormPropsType) => {

    type Values = {
        message: string
    }

    const initValues = {
        message: '',
    }

    const onSubmitHandler = (
        values: Values,
        {setSubmitting, resetForm}: FormikHelpers<Values>
    ) => {
        props.onSubmit(values.message)
        resetForm({values: {message: ''}})
        setSubmitting(false);
    }

    return (
        <Formik initialValues={initValues}
                onSubmit={onSubmitHandler}
        >
            <Form>
                <Field
                    name="message"
                    component={'textarea'}
                />
                <button type="submit">Add</button>
            </Form>
        </Formik>
    );
}