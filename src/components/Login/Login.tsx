import React from 'react';
import {Formik, FormikHelpers} from 'formik';
import {LoginForm} from "./LoginForm";
import {useDispatch} from "react-redux";
import {loginTC, setCaptchaUrlAC} from "../../redux/action-creators/auth";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Navigate} from "react-router-dom";
import s from './Login.module.css'
import {
    selectAuthID,
    selectIsAuth
} from "../../redux/selectors/auth-selectors";

type LoginValues = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl: string
}

export const Login = () => {
    const isAuth = useTypedSelector(selectIsAuth)
    const authId = useTypedSelector(selectAuthID)

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
        captchaUrl: '',
    }

    const handleOnSubmitClick = (
        values: LoginValues,
        {setSubmitting}: FormikHelpers<LoginValues>,
    ) => {
        const {email, password, rememberMe, captchaUrl} = values
        dispatch(loginTC(email, password, rememberMe, captchaUrl))
        dispatch(setCaptchaUrlAC(null))
        setSubmitting(false);
    }

    if (isAuth) {
        return <Navigate to={`/profile/${authId}`}/>
    }

    return (
        <div className={s.loginWrapper}>

            <div>
                <h1>Log in</h1>
                <div>
                    <h4>Here's default email and password so you can try it online
                        <p>login: <span className={s.description}>free@samuraijs.com</span></p>
                        <p>password: <span className={s.description}>free</span></p>
                    </h4>
                </div>
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