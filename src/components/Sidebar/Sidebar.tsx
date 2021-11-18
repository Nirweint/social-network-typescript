import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Sidebar.module.css';
import {FriendsType} from "../../redux/store";
import {ActiveFriends} from "./ActiveFriends/ActiveFriends";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";


type SidebarPropsType = {}

export const Sidebar = (props: SidebarPropsType) => {
    let sidebar = useSelector<RootReducerType, FriendsType>(state => state.sidebar)

    const activeLinkStyle = style.activeLink;

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={activeLinkStyle}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={activeLinkStyle}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={activeLinkStyle}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={activeLinkStyle}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={activeLinkStyle}>Settings</NavLink>
            </div>
            <div className={style.activeFriends}>
                <h3 className={style.title}>Friends:</h3>
                <ActiveFriends friends={sidebar.friends}/>
            </div>
        </nav>
    );
};