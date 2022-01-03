import React from 'react';
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import s from './AddPostForm.module.css'

export type AddPostFormValues = {
    post: string
}

type AddPostFormPropsType = {
    onSubmit: (newMessage: string) => void
}

export const AddPostForm = (props: AddPostFormPropsType) => {

    const addPostFormValidate = (values: AddPostFormValues) => {
        let errors: Partial<AddPostFormValues> = {};
        if (!values.post) {
            errors.post = 'Field is required';
        } else if (values.post.length > 50) {
            errors.post = 'Max Length is 50 symbols';
        }
        return errors
    }

    const onSubmitHandler = (
        values: AddPostFormValues,
        {setSubmitting, resetForm}: FormikHelpers<AddPostFormValues>
    ) => {
        props.onSubmit(values.post)
        resetForm({values: {post: ''}})
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{
                post: '',
            }}
            onSubmit={onSubmitHandler}
            validate={addPostFormValidate}
        >
            <Form>
                <Field
                    name="post"
                    component={"textarea"}
                    placeholder={"add Post..."}
                />
                <button type="submit">Add</button>
                <ErrorMessage name="post" component="div" className={s.error}/>
            </Form>
        </Formik>
    );
}