import React from 'react';
import style from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
    img: string
    id: string
}

export function Post(props: PostPropsType) {
    return (
        <div className={style.item} key={props.id}>
            <img className={style.avatar} src={props.img}
                 alt="avatar"/>
            <span>{props.message}</span>
            <div>
                <span>likes: {props.likesCount}</span>
            </div>
        </div>
    );
};