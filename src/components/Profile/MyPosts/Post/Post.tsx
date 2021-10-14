import React from 'react';
import s from './Post.module.css';

export const Post = () => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                 alt="avatar"/>
            <span>post 1</span>
            <div>
                <span>like</span>
            </div>
        </div>
    );
};