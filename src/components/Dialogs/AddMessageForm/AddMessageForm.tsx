import React from 'react';
import style from "./AddMessageForm.module.css";
import {Field, Form, Formik, FormikHelpers} from "formik";

type AddMessageFormPropsType = {
    onSubmit: (newMessage: string) => void
}

export const AddMessageForm = (props: AddMessageFormPropsType) => {

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
            <Form className={style.body}>
                <Field
                    className={style.inputItem}
                    name="message"
                    component={'input'}
                />
                <button type="submit" className={style.inputBtn}>Add</button>
            </Form>
        </Formik>

    );
}