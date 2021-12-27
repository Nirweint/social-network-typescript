import React from 'react';
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {addPostAC, changeNewPostTextCallBackAC} from "../../../redux/action-creators/profile";
import {RootReducerType} from "../../../redux/redux-store";
import {PostType} from "../../../redux/reducers/profile-reducer";

type mapStateToPropsType = {
    posts: Array<PostType>,
    newPostText: string
}

type mapDispatchToPropsType = {
    changeTextValue: (textValue: string) => void,
    addPost: () => void,
    addPostOnEnterPress: (keyValue: string) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        changeTextValue: (textValue: string) => {
            dispatch(changeNewPostTextCallBackAC(textValue))
        },
        addPost: () => {
            dispatch(addPostAC())
            dispatch(changeNewPostTextCallBackAC(''))
        },
        addPostOnEnterPress: (keyValue: string) => {
            if (keyValue === 'Enter') {
                dispatch(addPostAC())
                dispatch(changeNewPostTextCallBackAC(''))
            }
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);