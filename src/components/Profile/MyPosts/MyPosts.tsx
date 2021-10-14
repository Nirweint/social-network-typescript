import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
               <Post/>
               <Post/>
            </div>
        </div>
    );
};