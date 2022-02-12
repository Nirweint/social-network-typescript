import React from 'react';
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import s from './AddPostForm.module.css'
import {Button} from "../../../../UI/Button/Button";

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
            <Form className={s.form}>
                <div>
                    <Field
                        className={s.textarea}
                        name="post"
                        type='text'
                        component={"textarea"}
                        placeholder={"add Post..."}
                    />
                    <ErrorMessage name="post" component="div" className={s.error}/>
                </div>
                <Button className={s.btn} type="submit">Add</Button>
            </Form>
        </Formik>
    );
}