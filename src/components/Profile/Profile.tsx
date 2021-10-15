import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://i.pinimg.com/originals/3a/ff/a4/3affa4e523e653d3b8d4ebeb5d4aac34.jpg"
                     alt="background"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};