import React from 'react';
import {Navigate, NavLink} from 'react-router-dom';
import style from './Sidebar.module.css';
import {ActiveFriends} from "./ActiveFriends/ActiveFriends";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {FriendsType} from "../../redux/reducers/sidebar-reducer";


type SidebarPropsType = {}

export const Sidebar = (props: SidebarPropsType) => {
    let sidebar = useSelector<RootReducerType, FriendsType>(state => state.sidebar)
    const authId = useTypedSelector(state => state.auth.id)

    // const activeLinkStyle = style.activeLink;
    const activeLinkStyle = ({isActive}: { isActive: boolean }) => isActive ? style.activeLink : ""

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink
                    to={`/profile/${authId ? authId : <Navigate to="/login"/>}`}
                    className={activeLinkStyle}>
                    Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" className={activeLinkStyle}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" className={activeLinkStyle}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" className={activeLinkStyle}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" className={activeLinkStyle}>Settings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/users" className={activeLinkStyle}>Users</NavLink>
            </div>
            <div className={style.activeFriends}>
                <h3 className={style.title}>Friends:</h3>
                <ActiveFriends friends={sidebar.friends}/>
            </div>
        </nav>
    );
};