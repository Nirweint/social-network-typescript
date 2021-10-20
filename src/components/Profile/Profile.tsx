import React from 'react';
import {MyPosts, MyPostsPropsType} from "./MyPosts/MyPosts";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import {PostType} from "../../redux/state";


type ProfilePropsType = {
    posts: Array<PostType>
}

export const Profile = (props: ProfilePropsType ) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};