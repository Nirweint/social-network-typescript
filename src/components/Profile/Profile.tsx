import React from 'react';
import {MyPosts, MyPostsPropsType} from "./MyPosts/MyPosts";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import {MyPostDataType} from "../../index";

type ProfilePropsType = {
    myPostData: Array<MyPostDataType>
}

export const Profile = (props: ProfilePropsType ) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPostData={props.myPostData}/>
        </div>
    );
};