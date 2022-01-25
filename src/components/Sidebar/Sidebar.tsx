import React from 'react';
import {NavLink, useParams} from 'react-router-dom';
import style from './Sidebar.module.css';
import {ActiveFriends} from "./ActiveFriends/ActiveFriends";
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {FriendsType} from "../../redux/reducers/sidebar-reducer";
import {Nullable} from "../../types";

export const Sidebar = () => {
    let sidebar = useSelector<RootStateType, FriendsType>(state => state.sidebar)
    const authId = useTypedSelector(state => state.auth.id)
    const isAuth = useTypedSelector(state => state.auth.isAuth)
    const {userId} = useParams<'userId'>()

    const navigateTo = (isAuth: boolean, authId: Nullable<number>, userId: string | undefined) => {
        if (isAuth) {
            return `/profile/${authId}`
        }
        if (!userId) {
            return `/login`
        }
        return `/profile/${userId}`

    }

    const activeLinkStyle = ({isActive}: { isActive: boolean }) => isActive ? style.activeLink : ""
    const activeLinkStyleForProfile = ({isActive}: { isActive: boolean }) => isActive && authId ? style.activeLink : ""

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink
                    to={navigateTo(isAuth, authId, userId)}
                    className={activeLinkStyleForProfile}>
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