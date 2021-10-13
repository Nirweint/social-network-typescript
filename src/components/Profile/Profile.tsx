import React from 'react';
import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profile__image}
                     src="https://i.pinimg.com/originals/3a/ff/a4/3affa4e523e653d3b8d4ebeb5d4aac34.jpg"
                     alt="background"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};