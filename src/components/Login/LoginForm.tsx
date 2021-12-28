import React from 'react';
import {Field, Form} from "formik";

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
                </div>

                <label htmlFor="password">Password</label>
                <div>
                    <Field id="password" name="password" type='password' placeholder="password"/>
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