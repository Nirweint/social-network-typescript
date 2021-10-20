import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

export type MyPostsPropsType = {
    posts: Array<PostType>
}

export function MyPosts(props: MyPostsPropsType) {

    let postElements = props.posts.map(post => {
        return <Post
            message={post.message}
            likesCount={post.likesCount}
            img={post.img}
            id={post.id}/>
    })

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <textarea/>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};