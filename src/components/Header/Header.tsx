import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "../../UI/Button/Button";

export type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = ({isAuth, login}) => {
    return (
        <header className={s.header}>
            <img
                className={s.logo}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/1200px-Check_green_icon.svg.png"
                alt="logo"/>

            <div className={s.loginBlock}>
                {isAuth ? (
                        login
                    )
                    :
                    (
                        <NavLink to={"/login"}>
                            <Button>Login</Button>
                        </NavLink>
                    )}

            </div>

        </header>
    );
};