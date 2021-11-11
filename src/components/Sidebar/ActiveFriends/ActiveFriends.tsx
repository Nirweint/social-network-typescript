import React from 'react';
import {Friend} from "./Friend/Friend";
import {FriendType} from "../../../redux/state";
import style from './ActiveFriends.module.css';
import { NavLink } from 'react-router-dom';

type ActiveFriendsPropsType = {
    friends: Array<FriendType>
}

export function ActiveFriends(props: ActiveFriendsPropsType) {

    let FriendElement = props.friends.map(friend =><NavLink activeClassName={style.activeLink} key={friend.id} to={`/dialogs/${friend.id}`}><Friend  id={friend.id} name={friend.name} img={friend.img}/></NavLink> )

    return (
        <div className={style.activeFriends}>
            {FriendElement}
        </div>
    );
}