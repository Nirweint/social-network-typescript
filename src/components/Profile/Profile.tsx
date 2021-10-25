import React from 'react';
import {MyPosts, MyPostsPropsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import {PostType, UserInfoType} from "../../redux/state";


type ProfilePropsType = {
    posts: Array<PostType>
    userInfo: UserInfoType
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo userInfo={props.userInfo}/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};