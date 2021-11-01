import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';
import {PostType, UserInfoType} from "../../redux/state";


type ProfilePropsType = {
    posts: Array<PostType>
    userInfo: UserInfoType
    addPost: () => void
    newPostText: string
    changeNewPostTextCallBack: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo userInfo={props.userInfo}/>
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
                changeNewPostTextCallBack={props.changeNewPostTextCallBack}
            />
        </div>
    );
};