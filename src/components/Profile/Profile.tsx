import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';
import {ActionsTypes, PostType, UserInfoType} from "../../redux/state";


type ProfilePropsType = {
    posts: Array<PostType>
    userInfo: UserInfoType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo userInfo={props.userInfo}/>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};