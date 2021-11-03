import React from 'react';
import style from './Friend.module.css';

type FriendPropsType = {
    id: string
    name: string
    img: string
}

export function Friend(props: FriendPropsType ) {
    return (
        <div key={props.id}>
            <img className={style.avatar} src={props.img} alt="avatar"/>
            <div>{props.name}</div>
        </div>
    );
}
