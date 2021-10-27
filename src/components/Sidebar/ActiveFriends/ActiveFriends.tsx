import React from 'react';
import {Friend} from "./Friend/Friend";
import {FriendType} from "../../../redux/state";
import s from './ActiveFriends.module.css';
import { NavLink } from 'react-router-dom';

type ActiveFriendsPropsType = {
    friends: Array<FriendType>
}

export function ActiveFriends(props: ActiveFriendsPropsType) {

    let FriendElement = props.friends.map(friend =><NavLink to={`/dialogs/${friend.id}`}><Friend id={friend.id} name={friend.name} img={friend.img}/></NavLink> )

    return (
        <div className={s.activeFriends}>
            {FriendElement}
        </div>
    );
}