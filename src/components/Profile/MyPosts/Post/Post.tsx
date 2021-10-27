import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
    img: string
    id: string
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.item} key={props.id}>
            <img className={s.avatar} src={props.img}
                 alt="avatar"/>
            <span>{props.message}</span>
            <div>
                <span>likes: {props.likesCount}</span>
            </div>
        </div>
    );
};