import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Sidebar.module.css';
import {FriendType} from "../../redux/state";
import {ActiveFriends} from "./ActiveFriends/ActiveFriends";


type SidebarPropsType = {
    friends: Array<FriendType>
}

export const Sidebar = (props: SidebarPropsType) => {

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
                <ActiveFriends friends={props.friends}/>
            </div>
        </nav>
    );
};