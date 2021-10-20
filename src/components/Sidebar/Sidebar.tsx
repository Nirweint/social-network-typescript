import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';
import {FriendType} from "../../redux/state";
import {ActiveFriends} from "./ActiveFriends/ActiveFriends";


type SidebarPropsType = {
    friends: Array<FriendType>
}

export const Sidebar = (props: SidebarPropsType) => {


    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.activeFriends}>
                <ActiveFriends friends={props.friends}/>
            </div>

        </nav>
    );
};