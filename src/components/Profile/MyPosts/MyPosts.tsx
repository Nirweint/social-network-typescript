import React, {ChangeEvent,KeyboardEvent} from 'react';
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (value: string) => void
    newPostText: string
    changeNewPostTextCallBack: (newText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const onChangeInputValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPostTextCallBack(e.currentTarget.value)

    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPost()
        }
    }
    const addPost = () => {
        let trimmedNewPostText = props.newPostText.trim();

        if (trimmedNewPostText) {
            props.addPost(trimmedNewPostText)
            props.changeNewPostTextCallBack("")
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
                <textarea
                    value={props.newPostText}
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
}