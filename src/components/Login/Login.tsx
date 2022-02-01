import React from 'react';
import {Formik, FormikHelpers} from 'formik';
import {LoginForm} from "./LoginForm";
import {useDispatch} from "react-redux";
import {loginTC} from "../../redux/action-creators/auth";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Navigate} from "react-router-dom";
import s from './Login.module.css'

type LoginValues = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const isAuth = useTypedSelector(state => state.auth.isAuth)
    const authId = useTypedSelector(state => state.auth.id)

    const dispatch = useDispatch()

    const loginValidate = (values: LoginValues) => {
        let errors: Partial<LoginValues> = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        }

        return errors
    }

    const initValues = {
        email: '',
        password: '',
        rememberMe: false,
    }

    const handleOnSubmitClick = (
        values: LoginValues,
        {setSubmitting }: FormikHelpers<LoginValues>,
    ) => {
        const {email, password, rememberMe} = values
        dispatch(loginTC(email, password, rememberMe))
        setSubmitting(false);
    }

    if (isAuth) {
        return <Navigate to={`/profile/${authId}`}/>
    }

    return (
        <div className={s.loginWrapper}>
            <div>
                <h1>Log in</h1>
                <Formik
                    initialValues={initValues}
                    onSubmit={handleOnSubmitClick}
                    validate={loginValidate}
                >
                    <LoginForm/>
                </Formik>
            </div>
        </div>
    );
}