import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";
import {MyPostsPropsType} from "./MyPostsContainer";

// export type MyPostsPropsType = {
//     posts: Array<PostType>
//     newPostText: string
//     addPost: () => void
//     changeTextValue: (textValue: string) => void
//     addPostOnEnterPress: (keyValue: string) => void
// }

export function MyPosts(props: MyPostsPropsType) {

    const onChangeTextValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeTextValue(e.currentTarget.value)
    }
    const addPostOnEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        props.addPostOnEnterPress(e.key)
        e.key === "Enter" && e.preventDefault()// to think about
    }
    const addPostHandler = () => {
        props.addPost()
    }

    return (
        <div className={style.myPosts}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={props.newPostText}
                    onChange={onChangeTextValueHandler}
                    onKeyPress={addPostOnEnterPressHandler}
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