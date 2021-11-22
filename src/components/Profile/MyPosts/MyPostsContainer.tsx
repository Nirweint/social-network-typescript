import React from 'react';
import {PostType, RootStateType} from "../../../redux/store";
import {addPostAC, changeNewPostTextCallBackAC} from "../../../redux/profile-reducer";
import {connect, useDispatch} from "react-redux";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";

// export type MyPostsPropsType = {
//     posts: Array<PostType>
//     newPostText: string
// }

// export function MyPostsContainer(props: MyPostsPropsType) {
//
//     // let dispatch = useDispatch()
//
//     const ChangeTextValue = (textValue: string) => {
//         dispatch(changeNewPostTextCallBackAC(textValue))
//     }
//     const addPostOnEnterPress = (keyValue: string) => {
//         keyValue === 'Enter' &&
//         addPost()
//     }
//     const addPost = () => {
//         props.newPostText.trim() &&
//         dispatch(addPostAC())
//         dispatch(changeNewPostTextCallBackAC(''))
//     }
//
//     return (
//         <MyPosts
//             ChangeTextValue={ChangeTextValue}
//             addPost={addPost}
//             addPostOnEnterPress={addPostOnEnterPress}
//             posts={props.posts}
//             newPostText={props.newPostText}
//         />
//     );
// }

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


let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
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

export const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);