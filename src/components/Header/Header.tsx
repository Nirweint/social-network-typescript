import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "../../UI/Button/Button";
import logo from '../../assets/images/sn-icon.png';

export type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logoutHandler: () => void
}

export const Header: React.FC<HeaderPropsType> = ({isAuth, login, logoutHandler}) => {

    return (
        <header className={s.header}>
            <img
                className={s.logo}
                src={logo}
                alt="logo"/>

            <div className={s.loginBlock}>
                {isAuth ? (
                        <div>
                            <span>{login}</span>
                            <NavLink to={"/login"}>
                                <Button onClick={logoutHandler}>Logout</Button>
                            </NavLink>
                        </div>
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