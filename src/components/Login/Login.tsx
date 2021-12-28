import React from 'react';
import {Formik, FormikHelpers} from 'formik';
import {LoginForm} from "./LoginForm";
import {useDispatch} from "react-redux";
import {authorizeTC} from "../../redux/action-creators/auth";

type Values = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const dispatch = useDispatch()

    const initValues = {
        email: '',
        password: '',
        rememberMe: false,
    }

    const onSubmitHandler = (
        values: Values,
        {setSubmitting}: FormikHelpers<Values>
    ) => {
        const {email, password, rememberMe} = values
        dispatch(authorizeTC(email, password, rememberMe))
        setSubmitting(false);
    }


    return (
        <div>
            <h1>Log in</h1>
            <Formik
                initialValues={initValues}
                onSubmit={onSubmitHandler}
            >
                <LoginForm/>
            </Formik>
        </div>
    );
}