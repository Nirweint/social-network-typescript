import React from 'react';
import {Friend} from "./Friend/Friend";
import {FriendType} from "../../../redux/state";
import s from './ActiveFriends.module.css';

type ActiveFriendsPropsType = {
    friends: Array<FriendType>
}

export function ActiveFriends(props: ActiveFriendsPropsType) {

    let FriendElement = props.friends.map(friend => <Friend id={friend.id} name={friend.name} img={friend.img}/>)

    return (
        <div className={s.activeFriends}>
            {FriendElement}
        </div>
    );
}