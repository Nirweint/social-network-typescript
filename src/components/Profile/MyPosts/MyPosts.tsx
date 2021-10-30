import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (value: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    let [newPostText, setNewPostText] = useState('')

    const onChangeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPostText(e.currentTarget.value)
    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addPost()
        }
    }
    const addPost = () => {
        let trimmedNewPostText = newPostText.trim();

        if (trimmedNewPostText) {
            props.addPost(trimmedNewPostText)
            setNewPostText('')
        }
    }
    const postElements = props.posts.map(post => {
        return <Post
            message={post.message}
            likesCount={post.likesCount}
            img={post.img}
            id={post.id}/>
    })

    return (
        <div className={style.myPosts}>
            <h3>My posts</h3>
            <div>
                <input
                    value={newPostText}
                    onChange={onChangeInputValueHandler}
                    onKeyPress={onEnterPressHandler}
                />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    );
};