import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img className={s.avatar} src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                 alt="avatar"/>
            <span>{props.message}</span>
            <div>
                <span>likes: {props.likesCount}</span>
            </div>
        </div>
    );
};