import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (value: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    let [newPostText, setNewPostText] = useState('')

    const postElements = props.posts.map(post => {
        return <Post
            message={post.message}
            likesCount={post.likesCount}
            img={post.img}
            id={post.id}/>
    })


    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => setNewPostText(e.currentTarget.value)
    const addPost = () => props.addPost(newPostText)

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={newPostText}
                    onChange={onChange}
                />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};