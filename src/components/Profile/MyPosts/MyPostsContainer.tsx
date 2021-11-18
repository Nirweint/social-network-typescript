import React from 'react';
import {PostType} from "../../../redux/store";
import {addPostAC, changeNewPostTextCallBackAC} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import {MyPosts} from "./MyPosts";

export type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
}

export function MyPostsContainer(props: MyPostsPropsType) {

    let dispatch = useDispatch()

    const ChangeTextValue = (textValue: string) => {
        dispatch(changeNewPostTextCallBackAC(textValue))
    }
    const addPostOnEnterPress = (keyValue: string) => {
        keyValue === 'Enter' &&
        addPost()
    }
    const addPost = () => {
        props.newPostText.trim() &&
        dispatch(addPostAC())
        dispatch(changeNewPostTextCallBackAC(''))
    }

    return (
        <MyPosts
            ChangeTextValue={ChangeTextValue}
            addPost={addPost}
            addPostOnEnterPress={addPostOnEnterPress}
            posts={props.posts}
            newPostText={props.newPostText}
        />
    );
}