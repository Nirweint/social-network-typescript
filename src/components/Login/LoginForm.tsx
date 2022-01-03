import React from 'react';
import {ErrorMessage, Field, Form} from "formik";
import s from "../Profile/MyPosts/AddPostForm/AddPostForm.module.css";

type LoginFormPropsType = {

}

export const LoginForm = () => {
    return (
        <>
            <Form>
                <label htmlFor="email">Email</label>
                <div>
                    <Field
                        id="email"
                        name="email"
                        placeholder="email"
                        type="email"
                    />
                    <ErrorMessage name="email" component="div" className={s.error}/>
                </div>

                <label htmlFor="password">Password</label>
                <div>
                    <Field id="password" name="password" type='password' placeholder="password"/>
                    <ErrorMessage name="password" component="div" className={s.error}/>
                </div>
                <div>
                    <Field name="rememberMe" type="checkbox"/>
                    <label htmlFor="rememberMe">remember me</label>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </>
    );
}