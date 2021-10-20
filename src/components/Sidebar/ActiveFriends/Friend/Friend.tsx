import React from 'react';
import s from './Friend.module.css';

type FriendPropsType = {
    id: number
    name: string
    img: string
}

export function Friend(props: FriendPropsType ) {
    return (
        <div key={props.id}>
            <img className={s.avatar} src={props.img} alt="avatar"/>
            <div>{props.name}</div>
        </div>
    );
}
