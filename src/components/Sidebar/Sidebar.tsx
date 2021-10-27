import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css';
import {FriendType} from "../../redux/state";
import {ActiveFriends} from "./ActiveFriends/ActiveFriends";


type SidebarPropsType = {
    friends: Array<FriendType>
}

export const Sidebar = (props: SidebarPropsType) => {


    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
            </div>
            <div className={style.activeFriends}>
                <h3 className={style.title}>Friends:</h3>
                <ActiveFriends friends={props.friends}/>
            </div>

        </nav>
    );
};