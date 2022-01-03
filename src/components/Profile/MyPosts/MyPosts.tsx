import React from 'react';
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddPostForm} from "./AddPostForm/AddPostForm";
import {useDispatch} from "react-redux";
import {addPostAC} from "../../../redux/action-creators/profile";

export function MyPosts(props: MyPostsPropsType) {

    const dispatch = useDispatch()

    const addNewPost = (newPostText: string) => {
        dispatch(addPostAC(newPostText))
    }

    return (
        <div className={style.myPosts}>
            <h3>My posts</h3>
            <AddPostForm
                onSubmit={addNewPost}
            />
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