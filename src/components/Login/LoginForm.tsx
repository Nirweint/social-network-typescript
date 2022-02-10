import React from 'react';
import {ErrorMessage, Field, Form} from "formik";
import s from "./LoginForm.module.css";
import {Button} from "../../UI/Button/Button";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {selectAuthError, selectCaptchaUrl} from "../../redux/selectors/auth-selectors";

export const LoginForm = () => {
    const captchaUrl = useTypedSelector(selectCaptchaUrl)
    const error = useTypedSelector(selectAuthError)


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
                    <Field className={s.formInput} id="password" name="password"
                           type='password' placeholder="password"/>
                    <ErrorMessage name="password" component="div" className={s.error}/>
                    {error && <div style={{color: "red"}}>{error}</div>}
                </div>
                <div>
                    <Field
                        className={s.checkbox}
                        name="rememberMe"
                        type="checkbox"
                        id='rememberMe'
                    />
                    <label
                        className={s.checkbox}
                        htmlFor="rememberMe"
                        id='rememberMe'
                    >
                        remember me
                    </label>
                </div>
                {captchaUrl !== null &&
                    <div>
						<img src={captchaUrl} alt="captchaImage"/>
                    <div>
						<Field className={s.formInput} id="captchaUrl" name="captchaUrl"/>
                    </div>
                    </div>
                }
                <Button type="submit">Submit</Button>
            </Form>
        </>
    );
}