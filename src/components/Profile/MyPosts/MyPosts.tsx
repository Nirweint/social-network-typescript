import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <textarea/>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hello, how are you?" likesCount={4}/>
                <Post message="It's my first post!" likesCount={9}/>
            </div>
        </div>
    );
};