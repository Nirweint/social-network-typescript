import React from 'react';
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {addPostAC} from "../../../redux/action-creators/profile";
import {RootReducerType} from "../../../redux/redux-store";
import {PostType} from "../../../redux/reducers/profile-reducer";

type mapStateToPropsType = {
    posts: Array<PostType>,
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void,
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);