import React from 'react';
import {ErrorMessage, Field, Form} from "formik";
import s from "./LoginForm.module.css";
import {Button} from "../../UI/Button/Button";

export const LoginForm = () => {
    return (
        <>
            <Form>
                <label htmlFor="email">Email</label>
                <div>
                    <Field
                        className={s.formInput}
                        id="email"
                        name="email"
                        placeholder="email"
                        type="email"
                    />
                    <ErrorMessage name="email" component="div" className={s.error}/>
                </div>

                <label htmlFor="password">Password</label>
                <div>
                    <Field className={s.formInput} id="password" name="password" type='password' placeholder="password"/>
                    <ErrorMessage name="password" component="div" className={s.error}/>
                </div>
                <div>
                    <Field className={s.checkbox}  name="rememberMe" type="checkbox"/>
                    <label className={s.checkbox} htmlFor="rememberMe">remember me</label>
                </div>
                <Button type="submit">Submit</Button>
            </Form>
        </>
    );
}