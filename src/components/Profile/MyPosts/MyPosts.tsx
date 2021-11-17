import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/state";
import {addPostAC, changeNewPostTextCallBackAC} from "../../../redux/profile-reducer";

export type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const onChangeTextValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewPostTextCallBackAC(e.currentTarget.value))
    }
    const onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPostHandler()
            e.preventDefault()
        }
    }
    const addPostHandler = () => {
        props.dispatch(addPostAC())
    }

    return (
        <div className={style.myPosts}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={props.newPostText}
                    onChange={onChangeTextValueHandler}
                    onKeyPress={onEnterPressHandler}
                />
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={style.posts}>
                {props.posts.map(post => {
                    return <Post
                        key={post.id}
                        message={post.message}
                        likesCount={post.likesCount}
                        img={post.img}
                        id={post.id}
                    />
                })}
            </div>
        </div>
    );
}