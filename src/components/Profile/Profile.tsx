import React from 'react';
import './Profile.css';

export const Profile = () => {
    return (
        <div className="profile">
            <div>
                <img className="profile__image"
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
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
};