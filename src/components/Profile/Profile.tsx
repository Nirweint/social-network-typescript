import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';
import {PostType, UserInfoType} from "../../redux/state";


type ProfilePropsType = {
    posts: Array<PostType>
    userInfo: UserInfoType
    addPost: (value: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo userInfo={props.userInfo}/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};