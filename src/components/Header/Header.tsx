import React from 'react';
import style from './Header.module.css';

export const Header = () => {
    return (
        <header className={style.header}>
            <img
                className={style.logo}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/1200px-Check_green_icon.svg.png"
                alt="logo"/>
        </header>
    );
};