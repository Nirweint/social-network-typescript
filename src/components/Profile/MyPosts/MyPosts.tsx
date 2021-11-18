import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostAC, changeNewPostTextCallBackAC} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";

export type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    // dispatch: (action: ActionsTypes) => void
}

export function MyPosts(props: MyPostsPropsType) {

    let dispatch = useDispatch()

    const onChangeTextValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.currentTarget.value.trim() &&
        dispatch(changeNewPostTextCallBackAC(e.currentTarget.value))
    }
    const onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPostHandler()
            e.preventDefault()
        }
    }
    const addPostHandler = () => {
        props.newPostText &&
        dispatch(addPostAC())
        dispatch(changeNewPostTextCallBackAC(''))
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